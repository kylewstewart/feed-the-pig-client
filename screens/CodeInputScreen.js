import React, { Component } from 'react';
import { View } from 'react-native';

import Styles from '../styles/CodeInputStylesScreen';
import FullLogo from '../components/FullLogo';

// const propTypes = {
//
// };

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
      </View>
    );
  }
}

export default CreateAcctScreen;
