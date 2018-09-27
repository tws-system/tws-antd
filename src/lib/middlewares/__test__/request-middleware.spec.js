import sinon from 'sinon'
import requestMiddleware from "../request-middleware"

require('isomorphic-fetch')

describe('requestMiddleware', () => {
  let sandbox
  let nextStub
  let actionHandler

  beforeEach(() => {
    fetch.resetMocks()
    sandbox = sinon.createSandbox()
    nextStub = sandbox.stub()
    actionHandler = requestMiddleware()(nextStub)
  })

  afterEach(() => {
    sandbox.restore()
  })

  it('should handle success response correctly', async () => {
    const action = {
      type: 'action',
      request: { url: 'http://test.com', method: 'get' }
    }
    const response = { data: 'data' }
    fetch.mockResponseOnce(JSON.stringify(response))

    await actionHandler(action).then(() => {
      expect(nextStub.calledTwice).toBe(true)
      expect(nextStub.getCall(1).args[0].type).toBe('action_SUCCESS')
      expect(nextStub.getCall(1).args[0].response).toEqual(response)
    })
  })

  it('should handle response with status > 400', async () => {
    const action = {
      type: 'action',
      request: { url: 'http://test.com', method: 'get' }
    }
    const error = { error: 'error' }
    fetch.mockResponse(error, { status: '503' })

    await actionHandler(action).then(() => {
      expect(nextStub.calledTwice).toBe(true)
      expect(nextStub.getCall(1).args[0].type).toBe('action_FAILURE')
      expect(nextStub.getCall(1).args[0].error.status).toBe('503')
      expect(nextStub.getCall(1).args[0].error.statusText).toBe('Service Unavailable')
    })
  })

  it('should catch exception correctly', async () => {
    const action = {
      type: 'action',
      request: { url: 'http://test.com', method: 'get' }
    }
    const error = { error: 'error' }
    fetch.mockReject(error)

    await actionHandler(action).then(() => {
      expect(nextStub.calledTwice).toBe(true)
      expect(nextStub.getCall(1).args[0].type).toBe('action_FAILURE')
      expect(nextStub.getCall(1).args[0].error).toBe(error)
    })
  })

  it('should call callbackAction when it exsits and request success', async () => {
    const action = {
      type: 'action',
      request: {
        url: 'http://test.com',
        method: 'get',
        callbackAction: {
          type: 'callbackAction',
          request: { url: 'http://callback.com', method: 'get' },
        }
      },
    }
    const response = { data: 'data' }
    fetch.mockResponseOnce(JSON.stringify(response))

    await actionHandler(action).then(() => {
      expect(nextStub.calledThrice).toBe(true)
      expect(nextStub.getCall(1).args[0]).toEqual(action.request.callbackAction)
      expect(nextStub.getCall(2).args[0].type).toBe('action_SUCCESS')
      expect(nextStub.getCall(2).args[0].response).toEqual(response)
    })
  })

  it('should call fallbackAction when it exsits and request failed', async () => {
    const action = {
      type: 'action',
      request: {
        url: 'http://test.com',
        method: 'get',
        fallbackAction: {
          type: 'fallbackAction',
          request: { url: 'http://callback.com', method: 'get' },
        }
      },
    }
    const error = { error: 'error' }
    fetch.mockReject(error)

    await actionHandler(action).then(() => {
      expect(nextStub.calledThrice).toBe(true)
      expect(nextStub.getCall(1).args[0]).toEqual(action.request.fallbackAction)
      expect(nextStub.getCall(2).args[0].type).toBe('action_FAILURE')
      expect(nextStub.getCall(2).args[0].error).toBe(error)
    })
  })
})
