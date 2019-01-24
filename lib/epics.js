import { combineEpics } from 'redux-observable'

import { searchEpic, searchTrackEpic } from '../containers/Search/Search.epics'
import { showResultsArtistsEpic, showResultsNothingEpic } from '../containers/Results/Results.epics'

export const rootEpic = combineEpics(
  searchEpic,
  searchTrackEpic,
  showResultsArtistsEpic,
  showResultsNothingEpic,
)
