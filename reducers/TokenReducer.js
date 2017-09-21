import { SET_TOKEN, CLEAR_TOKEN } from '../actions/types';

export default (state = null, action) => {
  switch (action.type) {
    case SET_TOKEN: {
      return action.payload;
    }
    case CLEAR_TOKEN: {
      return null;
    }
    default:
      return state;
  }
};
