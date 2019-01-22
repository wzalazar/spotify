import { ajax } from 'rxjs/observable/dom/ajax';
import { get } from 'lodash';
import { createStore, applyMiddleware, compose } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import combineActionsMiddleware from 'redux-combine-actions';
import { rootReducer } from './reducers';
import { rootEpic } from './epics';

const graphql = function(query, variables) {
  const state = store.getState();
  const host = get(state, 'config.host', 'localhost');
  const isProduction = get(state, 'config.isProduction', true);

  return ajax({
    url: `//${host}${isProduction ? '' : ':4000'}/graphql`,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      variables: variables,
      query: query,
    }),
  });
};

const epicMiddleware = createEpicMiddleware(rootEpic, {
  dependencies: graphql,
});


let store = null;

export default function initStore(state) {
  const middlewareApplied = ['epicMiddleware', 'combineActionsMiddleware'];
  const middlewares = [
    epicMiddleware,
    combineActionsMiddleware,
  ];

  if (process.env.NODE_ENV === 'development') {
    const { logger } = require('redux-logger');
    middlewares.push(logger);
    middlewareApplied.push('logger');
  }

  if (process.browser && window.devToolsExtension && !store) {
    store = createStore(
      rootReducer,
      state,
      compose(
        applyMiddleware(...middlewares),
        window.devToolsExtension()
      )
    );

    window.store = store;

    middlewareApplied.push('devToolsExtension');
    return {
      store,
      middlewareApplied,
    };
  }

  if (!process.browser || !store) {
    store = createStore(
      rootReducer,
      state,
      compose(
        applyMiddleware(...middlewares)
      )
    );

    global.store = store;
  }

  return {
    store,
    middlewareApplied,
  };
}
