const defaultState = {
  isWithoutArtist: false,
  isEmptySearch: true,
  error: false,
  artists: [],
  tracks: [],
};

export default function(state = defaultState, action) {
  switch (action.type) {

  case 'SEARCH':
    return {
      ...state,
      currentSelectedArtist: action.payload.artist,
      isEmptySearch: false,
      isSearching: true,
      tracks: [],
      error: false,
    };

  case 'SEARCH_SUCCESS':
    const isWithoutArtist = action.payload.length === 0 ? true : false;

    return {
      ...state,
      isWithoutArtist,
      isEmptySearch: false,
      isSearching: false,
      artists: action.payload,
      error: false,
    };

  case 'SEARCH_ERROR':
    return {
      ...state,
      isEmptySearch: false,
      isSearching: false,
      error: true,
    };

  case 'SEARCH_CLEAR':
    return {
      ...state,
      isEmptySearch: true,
      isSearching: false,
    };

  case 'SEARCH_TRACKS_BY_ALBUM':
    return {
      ...state,
      isSearching: true,
      tracks: [],
    };

  case 'SEARCH_TRACKS_BY_ALBUM_SUCCESS':
    return {
      ...state,
      isSearching: false,
      tracks: action.payload,
    };

  case 'SEARCH_TRACKS_BY_ALBUM_ERROR':
    return {
      ...state,
      isSearching: false,
    };

  case 'SEARCH_TRACKS_BY_ALBUM_CANCELLED':
    return {
      ...state,
      isSearching: false,
    };

  case 'SEARCH_TRACKS_BY_ALBUM_CLEAR':
    return {
      ...state,
      isSearching: false,
    };

  default:
    return state;
  }
}
