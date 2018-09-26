require('es6-promise').polyfill()
require('isomorphic-fetch')

export const status = {
  loading: '_LOADING',
  success: '_SUCCESS',
  failure: '_FAILURE'
}

const successActionCreator = (action, response) => ({ type: action.type + status.success, response })
const failureActionCreator = (action, error) => ({ type: action.type + status.failure, error })

export const requestMiddleware = () => next => action => {
  if (action.request) {
    next(Object.assign({}, action, { type: action.type + status.loading }))
    const { url, ...otherConfigs } = action.request
    return fetch(url, otherConfigs)
      .then(response => {
        if (response.status >= 400) {
          return Promise.reject(response)
        }
        return response.json()
      })
      .then(responseBody => next(successActionCreator(action, responseBody)))
      .catch(error => next(failureActionCreator(action, error)))
  }
  return next(action)
}