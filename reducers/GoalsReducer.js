import { SET_GOALS, CLEAR_GOALS, ADD_GOAL, UPDATE_GOAL, DELETE_GOAL } from '../actions/types';

const initialState = [{
  id: 0,
  name: '',
  amount: '',
  saved: '',
  date: new Date(),
  rate: '',
}];

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_GOALS: {
      const goals = action.payload.map((goal) => {
        const { id, name, amount, saved, date, rate } = goal;
        return { id, name, amount, saved, date: new Date(date), rate };
      });
      return goals;
    }
    case CLEAR_GOALS: {
      return null;
    }
    case ADD_GOAL: {
      const { id, name, amount, saved, date, rate } = action.payload;
      return [...state, { id, name, amount, saved, date: new Date(date), rate }];
    }
    case UPDATE_GOAL: {
      const { id, name, amount, saved, date, rate } = action.payload;
      return state.map(goal => (
        goal.id === action.id ?
        { id, name, amount, saved, date: new Date(date), rate } :
        goal
      ));
    }
    case DELETE_GOAL: {
      return state;
    }
    default:
      return state;
  }
};
