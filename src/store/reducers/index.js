import { combineReducers } from 'redux';

import LibraryReducer from './LibraryReducer';
import selectedLibrary from './SelectionReducer';
import AuthReducer from './AuthReducer';

export default combineReducers({
  libraries: LibraryReducer,
  selectedLibrary,
  auth: AuthReducer
});
