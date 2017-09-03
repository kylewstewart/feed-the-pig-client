import React, { Component } from 'react';
import { View } from 'react-native';

import Styles from '../styles/LogInScreenStyles';
import FullLogo from '../components/FullLogo';


class LogInScreen extends Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <View style={Styles.container}>
        <FullLogo />
      </View>
    );
  }
}

export default LogInScreen;
