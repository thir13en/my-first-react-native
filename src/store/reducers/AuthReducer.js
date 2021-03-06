import {
  EMAIL_CHANGED,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  PASSWORD_CHANGED, LOGIN_USER
} from '../actions/types';

const INITIAL_STATE = {
  email: '',
  password: '',
  error: '',
  loading: false,
  user: null
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case EMAIL_CHANGED:
      return {
        ...state,
        email: action.payload
      };
    case PASSWORD_CHANGED:
      return {
        ...state,
        password: action.payload
      };
    case LOGIN_USER:
      return {
        ...state,
        loading: true,
        error: ''
      };
    case LOGIN_USER_SUCCESS:
      return {
        ...state,
        ...INITIAL_STATE,
        user: action.payload
      };
    case LOGIN_USER_FAIL:
      return {
        ...state,
        error: 'Authentication failed',
        password: '',
        loading: false
      };
    default:
      return state;
  }
};
