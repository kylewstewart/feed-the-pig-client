import { MOBILE_INPUT, CLEAR_MOBILE } from '../actions/types';

export default (state = '', action) => {
  switch (action.type) {
    case MOBILE_INPUT: {
      return action.payload.replace(/[^\d]/g, '');
    }
    case CLEAR_MOBILE: {
      return '';
    }
    default:
      return state;
  }
};
