import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { NavigationActions } from 'react-navigation';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Styles from '../styles/MobileInputScreenStyles';
import FullLogo from '../components/FullLogo';
import MobileInput from '../components/MobileInput';
import { getCode } from '../actions';

const propTypes = {
  mobile: PropTypes.string.isRequired,
  getCode: PropTypes.func.isRequired,
  navigation: PropTypes.shape({
    dispatch: PropTypes.func.isRequired,
  }).isRequired,
};

class MobileInputScreen extends Component {
  static navigationOptions = {
    title: 'Feed Me Your Mobile',
    headerTitleStyle: Styles.headerTitle,
  };

  onPress = () => {
    if (this.props.mobile.length === 10) {
      this.props.getCode(this.props.mobile);
      this.props.navigation.dispatch(NavigationActions.navigate({ routeName: 'codeInput' }));
    }
  }

  render() {
    return (
      <View style={Styles.screenContainer}>
        <View style={Styles.columnOne}>
          <FullLogo />
        </View>
        <View style={Styles.columnTwo}>
          <MobileInput />
          <TouchableOpacity onPress={this.onPress} style={Styles.button}>
            <Text style={Styles.buttonText}>
              get code
            </Text>
          </TouchableOpacity>
        </View>
        <View style={Styles.columnThree} />
      </View>
    );
  }
}

MobileInputScreen.propTypes = propTypes;

const mapStateToProps = state => ({ mobile: state.mobile });

export default connect(mapStateToProps, { getCode })(MobileInputScreen);
