import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addNavigationHelpers, StackNavigator, TabNavigator } from 'react-navigation';

import WelcomeScreen from '../screens/WelcomeScreen';
import MobileInputScreen from '../screens/MobileInputScreen';
import CodeInputScreen from '../screens/CodeInputScreen';
import MainScreen from '../screens/MainScreen';
import ErrorScreen from '../screens/ErrorScreen';
import FeedMeScreen from '../screens/FeedMeScreen';
import GoalsScreen from '../screens/GoalsScreen';
import GoalScreen from '../screens/GoalScreen';

const propTypes = {
  dispatch: PropTypes.func.isRequired,
  nav: PropTypes.shape({}).isRequired,
};

const GoalNavigator = StackNavigator({
  goals: { screen: GoalsScreen },
  goal: { screen: GoalScreen },
},
{ headerMode: 'none' },
);

const MainNavigator = TabNavigator({
  main: { screen: MainScreen },
  feedMe: { screen: FeedMeScreen },
  goals: { screen: GoalNavigator },
});

export const AppNavigator = StackNavigator({
  welcome: { screen: WelcomeScreen },
  mobileInput: { screen: MobileInputScreen },
  codeInput: { screen: CodeInputScreen },
  error: { screen: ErrorScreen },
  main: { screen: MainNavigator },
});

const AppWithNavigationState = ({ dispatch, nav }) => (
  <AppNavigator navigation={addNavigationHelpers({ dispatch, state: nav })} />
);

AppWithNavigationState.propTypes = propTypes;

const mapStateToProps = state => ({ nav: state.nav });

export default connect(mapStateToProps)(AppWithNavigationState);
