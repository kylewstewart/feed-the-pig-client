import { MOBILE_INPUT_CHANGED } from '../actions/types';

export default (state = '', action) => {
  switch (action.type) {
    case MOBILE_INPUT_CHANGED: {
      return action.payload.replace(/[^\d]/g, '');
    }
    default:
      return state;
  }
};
