import {
  MOBILE_INPUT_CHANGED } from './types';

export const mobileInputChanged = text => (
  {
    type: MOBILE_INPUT_CHANGED,
    payload: text,
  }
);
