import { combineReducers } from 'redux';
import MobileReducer from './MobileReducer';

export default combineReducers({
  mobile: MobileReducer,
});
