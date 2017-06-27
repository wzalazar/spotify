const defaultState = {
  host: 'localhost',
  isSetConfig: false,
};

export default function(state = defaultState, action) {
  switch (action.type) {

  case 'SET_CONFIG':
    return {
      ...state,
      ...action.payload,
      isSetConfig: true,
    };

  default:
    return state;
  }
}
