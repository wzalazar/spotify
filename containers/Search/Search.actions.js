export const SEARCH = 'SEARCH'
export const SEARCH_SUCCESS = 'SEARCH_SUCCESS'
export const SEARCH_ERROR = 'SEARCH_ERROR'
export const SEARCH_CANCELLED = 'SEARCH_CANCELLED'
export const SEARCH_CLEAR = 'SEARCH_CLEAR'

export const SEARCH_TRACKS_BY_ALBUM = 'SEARCH_TRACKS_BY_ALBUM'
export const SEARCH_TRACKS_BY_ALBUM_SUCCESS = 'SEARCH_TRACKS_BY_ALBUM_SUCCESS'
export const SEARCH_TRACKS_BY_ALBUM_ERROR = 'SEARCH_TRACKS_BY_ALBUM_ERROR'
export const SEARCH_TRACKS_BY_ALBUM_CANCELLED = 'SEARCH_TRACKS_BY_ALBUM_CANCELLED'
export const SEARCH_TRACKS_BY_ALBUM_CLEAR = 'SEARCH_TRACKS_BY_ALBUM_CLEAR'

export const onSearch = payload => ({ type: SEARCH, payload })
export const onSearchSuccess = payload => ({ type: SEARCH_SUCCESS, payload })
export const onSearchError = payload => ({ type: SEARCH_ERROR, payload })
export const onSearchCancelled = payload => ({ type: SEARCH_CANCELLED, payload })
export const onSearchClear = payload => ({ type: SEARCH_CLEAR, payload })

export const onSearchTracksByAlbum = payload => ({ type: SEARCH_TRACKS_BY_ALBUM, payload })
export const onSearchTracksByAlbumSuccess = payload => ({ type: SEARCH_TRACKS_BY_ALBUM_SUCCESS, payload })
export const onSearchTracksByAlbumError = payload => ({ type: SEARCH_TRACKS_BY_ALBUM_ERROR, payload })
export const onSearchTracksByAlbumCancelled = payload => ({ type: SEARCH_TRACKS_BY_ALBUM_CANCELLED, payload })
export const onSearchTracksByAlbumClear = payload => ({ type: SEARCH_TRACKS_BY_ALBUM_CLEAR, payload })
