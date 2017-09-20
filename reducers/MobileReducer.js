import { MOBILE_INPUT } from '../actions/types';

export default (state = '', action) => {
  switch (action.type) {
    case MOBILE_INPUT: {
      return action.payload.replace(/[^\d]/g, '');
    }
    default:
      return state;
  }
};
