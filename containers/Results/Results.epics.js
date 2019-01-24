import 'rxjs'

import {
  SHOW_RESULTS_ARTISTS,
  SHOW_RESULTS_NOTHING,
} from './Results.actions'

import {
  SEARCH,
  SEARCH_SUCCESS,
  SEARCH_CLEAR,
} from '../Search/Search.actions'

export const showResultsNothingEpic = (action$) =>
  action$.ofType(SEARCH, SEARCH_CLEAR)
    .mapTo({ type: SHOW_RESULTS_NOTHING })

export const showResultsArtistsEpic = (action$) =>
  action$.ofType(SEARCH_SUCCESS)
    .mapTo({ type: SHOW_RESULTS_ARTISTS })
