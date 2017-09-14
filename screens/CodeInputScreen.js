import React, { Component } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';

import Styles from '../styles/CodeInputScreenStyles';
import FullLogo from '../components/FullLogo';
import CodeInput from '../components/CodeInput';

class CreateAcctScreen extends Component {
  static navigationOptions = {
    title: 'Feed Me Your Code',
    headerTitleStyle: Styles.headerTitle,
  };

  render() {
    return (
      <View style={Styles.screenContainer}>
        <View style={Styles.columnOne}>
          <FullLogo />
        </View>
        <View style={Styles.columnTwo}>
          <CodeInput />
          <TouchableOpacity onPress={this.onPress} style={Styles.button}>
            <Text style={Styles.buttonText}>
              submit code
            </Text>
          </TouchableOpacity>
        </View>
        <View style={Styles.columnThree} />
      </View>
    );
  }
}

export default CreateAcctScreen;
