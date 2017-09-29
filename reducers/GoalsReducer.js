import { SET_GOALS, CLEAR_GOALS } from '../actions/types';

export default (state = null, action) => {
  switch (action.type) {
    case SET_GOALS: {
      return action.payload;
    }
    case CLEAR_GOALS: {
      return null;
    }
    default:
      return state;
  }
};
