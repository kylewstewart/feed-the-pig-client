import Adaptors from '../adaptors';
import {
  MOBILE_INPUT_CHANGED,
  CODE_INPUT_CHANGED,
} from './types';

export const mobileInputChanged = text => (
  {
    type: MOBILE_INPUT_CHANGED,
    payload: text,
  }
);

export const codeInputChanged = text => (
  {
    type: CODE_INPUT_CHANGED,
    payload: text,
  }
);

export const getCode = (mobile) => {
  return (dispatch) => {
    Adaptors.getCode(mobile)
      .then(response => console.log(response));
  };
};
