import React, { Component } from 'react';
import { View } from 'react-native';

import Styles from '../styles/LogInScreenStyles';
import FullLogo from '../components/FullLogo';
import MobileInput from '../components/MobileInput';

class LogInScreen extends Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <View style={Styles.container}>
        <View style={Styles.columnOne} />
        <View style={Styles.columnTwo}>
          <FullLogo />
        </View>
        <View style={Styles.columnThree}>
          <MobileInput />
        </View>
        <View style={Styles.columnFour} />
      </View>
    );
  }
}

export default LogInScreen;
