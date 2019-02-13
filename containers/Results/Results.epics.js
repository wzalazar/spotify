import 'rxjs'
import { ofType } from 'redux-observable'
import { mapTo } from 'rxjs/operators'

import {
  SHOW_RESULTS_ARTISTS,
  SHOW_RESULTS_NOTHING,
} from './Results.actions'

import {
  SEARCH,
  SEARCH_SUCCESS,
  SEARCH_CLEAR,
} from '../Search/Search.actions'

export const showResultsNothingEpic = action$ => action$.pipe(
  ofType(SEARCH, SEARCH_CLEAR),
  mapTo({ type: SHOW_RESULTS_NOTHING })
)

export const showResultsArtistsEpic = action$ => action$.pipe(
  ofType(SEARCH_SUCCESS),
  mapTo({ type: SHOW_RESULTS_ARTISTS })
)
