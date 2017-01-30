const initialState = {
  mediums: []
};

export function mediums(state = initialState, action) {
  switch(action.type) {
    case 'Success':
      return Object.assign({}, state, {
        mediums: action.data
      });
    default:
      return state;
  }
}
