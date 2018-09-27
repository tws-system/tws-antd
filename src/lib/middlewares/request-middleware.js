require('es6-promise').polyfill()
require('isomorphic-fetch')

export const status = {
  loading: '_LOADING',
  success: '_SUCCESS',
  failure: '_FAILURE'
}

const successActionCreator = (action, response) => ({ type: action.type + status.success, response })
const failureActionCreator = (action, error) => ({ type: action.type + status.failure, error })

const requestMiddleware = () => next => action => {
  if (action.request) {
    next(Object.assign({}, action, { type: action.type + status.loading }))
    const { url, callbackAction, fallbackAction, ...otherConfig } = action.request
    return fetch(url, otherConfig)
      .then(response => {
        if (response.status >= 400) {
          return Promise.reject(response)
        }
        return response.json()
      })
      .then(responseBody => {
        callbackAction && next(callbackAction)
        return next(successActionCreator(action, responseBody))
      })
      .catch(error => {
        fallbackAction && next(fallbackAction)
        return next(failureActionCreator(action, error))
      })
  }
  return next(action)
}

export default requestMiddleware