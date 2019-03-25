import { Actions } from 'react-native-router-flux';

import {
  EMAIL_CHANGED, PASSWORD_CHANGED, LOGIN_USER_SUCCESS, LOGIN_USER_FAIL, LOGIN_USER
} from './types';
import firebaseApp from '../../core/firebase';

export const SelectLibrary = libraryId => ({
  type: 'select_library',
  payload: libraryId
});

export const EmailChanged = text => ({
  type: EMAIL_CHANGED,
  payload: text
});

export const PasswordChanged = psswd => ({
  type: PASSWORD_CHANGED,
  payload: psswd
});

export const LoginUser = (email, password) => (dispatch) => {
  dispatch({ type: LOGIN_USER });

  firebaseApp.auth().signInWithEmailAndPassword(email, password)
    .then(user => loginUserSuccess(dispatch, user))
    .catch(() => firebaseApp.auth().createUserWithEmailAndPassword(email, password)
      .then(user => loginUserSuccess(dispatch, user))
      .catch(() => loginUserFail(dispatch)));
};

const loginUserSuccess = (dispatch, user) => {
  dispatch({ type: LOGIN_USER_SUCCESS, payload: user });
  Actions.main();
};
const loginUserFail = dispatch => dispatch({ type: LOGIN_USER_FAIL });
