import Adaptors from '../adaptors';
import {
  MOBILE_INPUT,
  CODE_INPUT,
  USER_ID,
} from './types';

export const mobileInput = text => (
  { type: MOBILE_INPUT, payload: text }
);

export const codeInput = text => (
  { type: CODE_INPUT, payload: text }
);

export const getCode = (mobile) => {
  return (dispatch) => {
    Adaptors.getCode(mobile)
      .then((user) => {
        dispatch({ type: USER_ID, payload: user.id });
      });
  };
};

export const auth = (userId, code) => {
  return (dispatch) => {
    Adaptors.auth(userId, code)
    .then(response => console.log(response))
    .catch(response => console.log(response.error))
  };
};
