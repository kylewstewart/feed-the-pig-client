import React, { Component } from 'react';
import { View, StyleSheet, Image } from 'react-native';

import Logo from '../components/Logo';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightgrey',
  },
  logoContainer: {
    flex: 1,
    alignItems: 'center',
  },
});

class LogInScreen extends Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <Logo />
        </View>
      </View>
    );
  }
}

export default LogInScreen;
