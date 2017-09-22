import { SET_USER_ID, CLEAR_USER_ID } from '../actions/types';

export default (state = null, action) => {
  switch (action.type) {
    case SET_USER_ID: {
      return action.payload;
    }
    case CLEAR_USER_ID: {
      return null;
    }
    default:
      return state;
  }
};
