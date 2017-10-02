import { SET_GOALS, CLEAR_GOALS } from '../actions/types';

const initialState = [{
  id: 0,
  name: '',
  amount: 0,
  saved: 0,
  date: '',
  rate: 0,
}];

export default (state = initialState, action) => {
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
