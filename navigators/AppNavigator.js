import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addNavigationHelpers, StackNavigator } from 'react-navigation';

import AuthScreen from '../screens/AuthScreen';
import MobileInputScreen from '../screens/MobileInputScreen';
import CodeInputScreen from '../screens/CodeInputScreen';
import MainScreen from '../screens/MainScreen';

const propTypes = {
  dispatch: PropTypes.func.isRequired,
  nav: PropTypes.shape({}).isRequired,
};

export const AppNavigator = StackNavigator({
  auth: { screen: AuthScreen },
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
