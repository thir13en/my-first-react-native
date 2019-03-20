const INITIAL_STATE = { selectedLibraryId: null };

export default (state = INITIAL_STATE, action) => {
  console.log(state);
  switch (action.type) {
    case 'select_library':
      return {
        ...state,
        selectedLibraryId: action.payload
      };
    default:
      return state;
  }
};
