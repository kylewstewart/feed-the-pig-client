import { SET_LOGGED_IN, CLEAR_LOGGED_IN } from '../actions/types';

export default (state = false, action) => {
  switch (action.type) {
    case SET_LOGGED_IN: {
      return true;
    }
    case CLEAR_LOGGED_IN: {
      return false;
    }
    default:
      return state;
  }
};
