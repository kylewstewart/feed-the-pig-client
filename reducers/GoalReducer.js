import { SET_GOAL, CLEAR_GOAL } from '../actions/types';

const initialState = {
  id: 0,
  name: '',
  amount: '',
  saved: '',
  date: new Date(),
  rate: '',
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
