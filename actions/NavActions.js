import { NAV_CHANGE } from './types';

export const navChange = text => (
  {
    type: NAV_CHANGE,
    payload: text,
  }
);
