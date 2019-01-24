import { combineReducers } from 'redux'

import search from '../containers/Search/Search.reducers'
import results from '../containers/Results/Results.reducers'
import config from '../config/config.reducers'

export const rootReducer = combineReducers({
  search,
  results,
  config,
})
