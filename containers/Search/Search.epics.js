import 'rxjs';
import {
  SEARCH,
  SEARCH_CANCELLED,
  onSearchSuccess,
  onSearchError,
  SEARCH_TRACKS_BY_ALBUM,
  SEARCH_TRACKS_BY_ALBUM_CANCELLED,
  onSearchTracksByAlbumSuccess,
  onSearchTracksByAlbumError,
} from './Search.actions';

export const searchEpic = (action$, store, graphql) =>
  action$.ofType(SEARCH)
      .debounceTime(250)
      .mergeMap(action => graphql(action.payload.query, { artist: action.payload.artist })
      .map(({ response }) => onSearchSuccess(response.data.artist))
      .takeUntil(action$.ofType(SEARCH_CANCELLED))
      .catch(error => Observable.of(onSearchError(error.xhr.response)))
    );

export const searchTrackEpic = (action$, store, graphql) =>
  action$.ofType(SEARCH_TRACKS_BY_ALBUM)
      .debounceTime(250)
      .mergeMap(action => graphql(action.payload.query, { album: action.payload.album })
      .map(({ response }) => onSearchTracksByAlbumSuccess(response.data.tracksByAlbumId))
      .takeUntil(action$.ofType(SEARCH_TRACKS_BY_ALBUM_CANCELLED))
      .catch(error => Observable.of(onSearchTracksByAlbumError(error.xhr.response)))
    );
