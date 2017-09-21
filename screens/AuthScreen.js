import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, AsyncStorage } from 'react-native';
import { connect } from 'react-redux';
import { NavigationActions } from 'react-navigation';

import { authenticate } from '../actions';

const propTypes = {
  navigation: PropTypes.shape({
    dispatch: PropTypes.func.isRequired,
  }).isRequired,
};

class AuthScreen extends Component {
  componentDidMount() {
    const route = this.isAuthPresent() ? 'main' : 'mobileInput';
    console.log(route);
    this.props.navigation.dispatch(NavigationActions.navigate({ routeName: 'mobileInput' }));
  }

  isAuthPresent = async () => {
    const auth = await AsyncStorage.getItem('auth');
    return !auth;
  };

  render = () => <View />
}

AuthScreen.propTypes = propTypes;

export default connect(null, { authenticate })(AuthScreen);
