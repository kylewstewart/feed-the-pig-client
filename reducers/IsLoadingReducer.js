import { SET_IS_LOADING, CLEAR_IS_LOADING } from '../actions/types';

export default (state = false, action) => {
  switch (action.type) {
    case SET_IS_LOADING: {
      return true;
    }
    case CLEAR_IS_LOADING: {
      return false;
    }
    default:
      return state;
  }
};
