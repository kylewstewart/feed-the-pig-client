import { CODE_INPUT } from '../actions/types';

export default (state = '', action) => {
  switch (action.type) {
    case CODE_INPUT: {
      return action.payload;
    }
    default:
      return state;
  }
};
