import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Text, AsyncStorage } from 'react-native';
import { connect } from 'react-redux';
import { NavigationActions } from 'react-navigation';

import { Adaptors } from '../adaptors';
import {} from '../actions';

const propTypes = {
};

class AuthScreen extends Component {
  componentDidMount = async () => {
    const token = await AsyncStorage.getItem('token');
    if (token) {
      const userId = await Adaptors.currentUser(token);
      console.log(userId);
    }
    if (token) {
      this.props.navigation.dispatch(NavigationActions.navigate({ routeName: 'main' }));
      console.log('true', token);
    } else {
      this.props.navigation.dispatch(NavigationActions.navigate({ routeName: 'mobileInput' }));
      console.log('false', token);
    }
    // if (token) {
    // } else {
    // }
  }

  render() {
    return (
      <View>
        <Text> Auth Screen </Text>
      </View>
    );
  }
}

AuthScreen.propTypes = propTypes;

export default connect(null, {})(AuthScreen);
