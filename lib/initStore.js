import { ajax } from 'rxjs/ajax'
import { get } from 'lodash'
import { createStore, applyMiddleware, compose } from 'redux'
import { createEpicMiddleware } from 'redux-observable'
import combineActionsMiddleware from 'redux-combine-actions'
import { rootReducer } from './reducers'
import { rootEpic } from './epics'

const graphql = function(query, variables) {
  const state = store.getState()
  const host = get(state, 'config.host', 'localhost')
  const isProduction = get(state, 'config.isProduction', true)

  return ajax({
    url: `//${host}${isProduction ? '' : ':3000'}/graphql`,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      variables: variables,
      query: query,
    }),
  })
}

let store = null

export default function initStore(state) {
  const epicMiddleware = createEpicMiddleware({ dependencies: graphql })

  const middlewareApplied = ['epicMiddleware', 'combineActionsMiddleware']
  const middlewares = [
    epicMiddleware,
    combineActionsMiddleware,
  ]

  if (process.env.NODE_ENV === 'development') {
    const { logger } = require('redux-logger')
    middlewares.push(logger)
    middlewareApplied.push('logger')
  }

  if (process.browser && window.devToolsExtension && !store) {
    store = createStore(
      rootReducer,
      state,
      compose(
        applyMiddleware(...middlewares),
        window.devToolsExtension()
      )
    )

    epicMiddleware.run(rootEpic)

    window.store = store

    middlewareApplied.push('devToolsExtension')
    return {
      store,
      middlewareApplied,
    }
  }

  if (!process.browser || !store) {
    store = createStore(
      rootReducer,
      state,
      compose(
        applyMiddleware(...middlewares)
      )
    )

    // epicMiddleware.run(rootEpic)
    global.store = store
  }

  return {
    store,
    middlewareApplied,
  }
}
