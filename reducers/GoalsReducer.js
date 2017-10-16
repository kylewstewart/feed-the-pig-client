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
      return [...state, action.payload];
    }
    case UPDATE_GOAL: {
      return state.map(goal => (
        goal.id === action.id ?
        action.payload :
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
