const defaultState = {
  view: 'RESULTS_NOTHING',
  currentSelectedArtist: {},
  currentSelectedAlbum: {},
};

export default function(state = defaultState, action) {
  switch (action.type) {

  case 'SHOW_RESULTS_NOTHING':
    return {
      ...state,
      view: 'RESULTS_NOTHING',
    };

  case 'SHOW_RESULTS_ARTISTS':
    return {
      ...state,
      view: 'RESULTS_ARTISTS',
    };

  case 'SHOW_RESULTS_ALBUMS':
    return {
      ...state,
      view: 'RESULTS_ALBUMS',
      currentSelectedArtist: action.payload,
    };

  case 'SHOW_RESULTS_TRACKS':
    return {
      ...state,
      view: 'RESULTS_TRACKS',
      currentSelectedAlbum: action.payload,
    };

  case 'SHOW_RESULTS_NO_RESULTS':
    return {
      ...state,
      view: 'RESULTS_NO_RESULTS',
    };

  case 'SHOW_RESULTS_ERROR':
    return {
      ...state,
      view: 'RESULTS_ERROR',
    };

  default:
    return state;
  }
}
