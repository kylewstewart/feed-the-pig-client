import React, { Component } from 'react';
import { View, Text } from 'react-native';

class CreateAcctScreen extends Component {
  static navigationOptions = {
    title: 'Create Account',
  };

  render() {
    return (
      <View>
        <Text> Create New Account </Text>
      </View>
    );
  }
}

export default CreateAcctScreen;
