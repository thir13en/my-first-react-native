const INITIAL_STATE = { id: null };

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'select_library':
      return {
        ...state,
        id: action.payload
      };
    default:
      return state;
  }
};
