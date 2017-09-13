import { NavigationActions } from 'react-navigation';
import RootNavigation from '../navigation/RootNavigation';

const INITIAL_STATE = RootNavigation.router.getStateForAction(NavigationActions.init());

export default (state = INITIAL_STATE, action) => {
  const nextState = RootNavigation.router.getStateForAction(action, state);
  return nextState || state;
};
