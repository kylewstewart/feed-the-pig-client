import { NavigationActions } from 'react-navigation';
import { AppNavigator } from '../navigators/AppNavigator';

const INITIAL_STATE = AppNavigator.router.getStateForAction(NavigationActions.init());

export default (state = INITIAL_STATE, action) => {
  const nextState = AppNavigator.router.getStateForAction(action, state);
  return nextState || state;
};

// function nav(state = INITIAL_STATE, action) {
//   let nextState;
//   switch (action.type) {
//     case 'mobileInput':
//       nextState = AppNavigator.router.getStateForAction(
//         NavigationActions.back(),
//         state,
//       );
//       break;
//     case 'codeInput':
//       nextState = AppNavigator.router.getStateForAction(
//         NavigationActions.navigate({ routeName: 'codeInput' }),
//         state,
//       );
//       break;
//     default:
//       nextState = AppNavigator.router.getStateForAction(action, state);
//       break;
//   }
//
//   return nextState || state;
// }
//
// export default nav;
