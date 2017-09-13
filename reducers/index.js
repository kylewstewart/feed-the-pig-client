import { combineReducers } from 'redux';
import mobile from './MobileReducer';
import nav from './NavigationReducer';

export default combineReducers({
  mobile,
  nav,
});
