import { combineReducers } from 'redux';
import mobile from './MobileReducer';
import nav from './NavReducer';

export default combineReducers({
  mobile,
  nav,
});
