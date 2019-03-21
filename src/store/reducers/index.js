import { combineReducers } from 'redux';

import LibraryReducer from './LibraryReducer';
import selectedLibrary from './SelectionReducer';

export default combineReducers({
  libraries: LibraryReducer,
  selectedLibrary
});
