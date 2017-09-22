import { combineReducers } from 'redux';
import mobile from './MobileReducer';
import nav from './NavReducer';
import code from './CodeReducer';
import userId from './UserIdReducer';
import loggedIn from './LoggedInReducer';
import token from './TokenReducer';

export default combineReducers({
  mobile,
  nav,
  code,
  userId,
  loggedIn,
  token,
});
