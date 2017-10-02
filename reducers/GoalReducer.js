import { SET_GOAL, CLEAR_GOAL } from '../actions/types';

const initialState = {
  id: 0,
  name: '',
  amount: 0,
  saved: 0,
  date: '',
  rate: 0,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_GOAL: {
      return action.payload;
    }
    case CLEAR_GOAL: {
      return null;
    }
    default:
      return state;
  }
};
