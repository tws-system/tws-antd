import sinon from 'sinon'
import { requestMiddleware } from "../request-middleware";

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
      nextStub.getCall(1).args[0].response.then(data => expect(data).toEqual(response))
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
    });
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
    });
  })
});
