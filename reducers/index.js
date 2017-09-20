import { combineReducers } from 'redux';
import mobile from './MobileReducer';
import nav from './NavReducer';
import code from './CodeReducer';
import userId from './UserIdReducer';

export default combineReducers({
  mobile,
  nav,
  code,
  userId,
});
