import Adaptors from '../adaptors';
import {
  MOBILE_INPUT_CHANGED,
  CODE_INPUT_CHANGED,
  SET_USER_ID,
} from './types';

export const mobileInputChanged = text => (
  { type: MOBILE_INPUT_CHANGED, payload: text }
);

export const codeInputChanged = text => (
  { type: CODE_INPUT_CHANGED, payload: text }
);

export const getCode = (mobile) => {
  return (dispatch) => {
    Adaptors.getCode(mobile)
      .then((user) => {
        dispatch({ type: SET_USER_ID, payload: user.id });
      });
  };
};

export const auth = (userId, code) => {
  return (dispatch) => {
    Adaptors.auth(userId, code)
    .then(response => console.log(response))
  };
};
