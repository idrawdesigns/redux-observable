import { createStore, combineReducers } from 'redux'
import { appReducer } from './reducers/appReducer'

import { combineEpics, createEpicMiddleware } from 'redux-observable'

export function configureStore() {
  const rootReducer = combineReducers({
    app: appReducer
  })

  return createStore(rootReducer)
}
