require('es6-promise').polyfill();
require('isomorphic-fetch');

const status = {
  loading: '_LOADING',
  success: '_SUCCESS',
  failure: '_FAILURE'
}

const successActionCreator = (action, response) => ({ type: action.type + status.success, response: response && response.json() })
const failureActionCreator = (action, error) => ({ type: action.type + status.failure, error })

export const requestMiddleware = store => next => action => {
  if (action.request) {
    next(Object.assign({}, action, { type: action.type + status.loading }));
    const { url, ...otherConfigs } = action.request
    fetch(url, otherConfigs)
      .then(response => {
        if (response.status >= 400) {
          next(failureActionCreator(action, response))
        }
        next(successActionCreator(action, response))
      }).catch(error => next(failureActionCreator(action, error)))
  }
}