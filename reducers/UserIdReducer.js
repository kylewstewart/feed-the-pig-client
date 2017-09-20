import { USER_ID } from '../actions/types';

export default (state = '', action) => {
  switch (action.type) {
    case USER_ID: {
      return action.payload;
    }
    default:
      return state;
  }
};
