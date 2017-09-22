import { CODE_INPUT, CLEAR_CODE } from '../actions/types';

export default (state = '', action) => {
  switch (action.type) {
    case CODE_INPUT: {
      return action.payload;
    }
    case CLEAR_CODE: {
      return '';
    }
    default:
      return state;
  }
};
