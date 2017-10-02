import { combineReducers } from 'redux';
import mobile from './MobileReducer';
import nav from './NavReducer';
import code from './CodeReducer';
import userId from './UserIdReducer';
import loggedIn from './LoggedInReducer';
import token from './TokenReducer';
import Loading from './LoadingReducer';
import error from './ErrorReducer';
import goals from './GoalsReducer';
import goal from './GoalReducer';

export default combineReducers({
  mobile,
  nav,
  code,
  userId,
  loggedIn,
  token,
  Loading,
  error,
  goals,
  goal,
});
