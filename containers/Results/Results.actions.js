export const SHOW_RESULTS_NOTHING = 'SHOW_RESULTS_NOTHING';
export const SHOW_RESULTS_ARTISTS = 'SHOW_RESULTS_ARTISTS';
export const SHOW_RESULTS_ALBUMS = 'SHOW_RESULTS_ALBUMS';
export const SHOW_RESULTS_TRACKS = 'SHOW_RESULTS_TRACKS';
export const SHOW_RESULTS_NO_RESULTS = 'SHOW_RESULTS_NO_RESULTS';
export const SHOW_RESULTS_ERROR = 'SHOW_RESULTS_ERROR';

export const onShowResultsNothing = payload => ({ type: SHOW_RESULTS_NOTHING, payload });
export const onShowResultsArtists = payload => ({ type: SHOW_RESULTS_ARTISTS, payload });
export const onShowResultsAlbums = payload => ({ type: SHOW_RESULTS_ALBUMS, payload });
export const onShowResultsTracks = payload => ({ type: SHOW_RESULTS_TRACKS, payload });
export const onShowResultsNoResults = payload => ({ type: SHOW_RESULTS_NO_RESULTS, payload });
export const onShowResultsError = payload => ({ type: SHOW_RESULTS_ERROR, payload });
