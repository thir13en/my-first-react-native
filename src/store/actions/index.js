import { EMAIL_CHANGED, PASSWORD_CHANGED } from './types';
import firebaseApp from '../../firebase';

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

export const LoginUser = ({ email, password }) => {
  firebaseApp.auth().signInWithEmailAndPassword(email, password)
    .then(user => console.log(user));
};
