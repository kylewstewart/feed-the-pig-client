import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addNavigationHelpers, StackNavigator } from 'react-navigation';

import WelcomeScreen from '../screens/WelcomeScreen';
import MobileInputScreen from '../screens/MobileInputScreen';
import CodeInputScreen from '../screens/CodeInputScreen';
import MainScreen from '../screens/MainScreen';

const propTypes = {
  dispatch: PropTypes.func.isRequired,
  nav: PropTypes.shape({}).isRequired,
};

export const AppNavigator = StackNavigator({
  welcome: { screen: WelcomeScreen },
  mobileInput: { screen: MobileInputScreen },
  codeInput: { screen: CodeInputScreen },
  main: { screen: MainScreen },
});

const AppWithNavigationState = ({ dispatch, nav }) => (
  <AppNavigator navigation={addNavigationHelpers({ dispatch, state: nav })} />
);

AppWithNavigationState.propTypes = propTypes;

const mapStateToProps = state => ({ nav: state.nav });

export default connect(mapStateToProps)(AppWithNavigationState);
