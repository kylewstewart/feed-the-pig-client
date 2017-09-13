import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { NavigationActions } from 'react-navigation';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Styles from '../styles/MobileInputScreenStyles';
import FullLogo from '../components/FullLogo';
import MobileInput from '../components/MobileInput';

const propTypes = {
  mobile: PropTypes.string.isRequired,
  navigation: PropTypes.shape({
    dispatch: PropTypes.function,
  }).isRequired,
};

class MobileInputScreen extends Component {
  static navigationOptions = {
    title: 'Feed Me Your Mobile',
    headerTitleStyle: Styles.headerTitle,
  };

  onPress = () => {
    const { mobile, navigation } = this.props;
    if (mobile.length === 10) {
      navigation.dispatch(NavigationActions.navigate({ routeName: 'codeInput' }));
    }
  }

  render() {
    return (
      <View style={Styles.screenContainer}>
        <View style={Styles.columnOne}>
          <FullLogo />
        </View>
        <View style={Styles.columnTwo}>
          <View style={Styles.container}>
            <MobileInput />
            <TouchableOpacity onPress={this.onPress} style={Styles.button}>
              <Text style={Styles.buttonText}>
                get code
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={Styles.columnThree} />
      </View>
    );
  }
}

MobileInputScreen.propTypes = propTypes;

const mapStateToProps = state => ({ mobile: state.mobile });

export default connect(mapStateToProps)(MobileInputScreen);
