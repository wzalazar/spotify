import { of } from 'rxjs'
import { ofType } from 'redux-observable'
import { mergeMap, debounceTime, map, takeUntil, catchError } from 'rxjs/operators'

import {
  SEARCH,
  SEARCH_CANCELLED,
  onSearchSuccess,
  onSearchError,
  SEARCH_TRACKS_BY_ALBUM,
  SEARCH_TRACKS_BY_ALBUM_CANCELLED,
  onSearchTracksByAlbumSuccess,
  onSearchTracksByAlbumError,
} from './Search.actions'

export const searchEpic = (action$, state$, graphql) =>
  action$.pipe(
    ofType(SEARCH),
    debounceTime(250),
    mergeMap(action =>
      graphql(action.payload.query, { artist: action.payload.artist }).pipe(
        map(({ response }) => onSearchSuccess(response.data.getArtists)),
        takeUntil(action$.ofType(SEARCH_CANCELLED)),
        catchError(error => of(onSearchError(error.xhr.response)))
      ))
  )

export const searchTrackEpic = (action$, state$, graphql) =>
  action$.pipe(
    ofType(SEARCH_TRACKS_BY_ALBUM),
    debounceTime(250),
    mergeMap(action =>
      graphql(action.payload.query, { album: action.payload.album }).pipe(
        map(({ response }) => onSearchTracksByAlbumSuccess(response.data.getTracksByAlbum)),
        takeUntil(action$.ofType(SEARCH_TRACKS_BY_ALBUM_CANCELLED)),
        catchError(error => of(onSearchTracksByAlbumError(error.xhr.response)))
      ))
  )

