import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Styles from '../styles/MobileInputScreenStyles';
import FullLogo from '../components/FullLogo';
import MobileInput from '../components/MobileInput';
import { getCode } from '../actions';

const propTypes = {
  mobile: PropTypes.string.isRequired,
  getCode: PropTypes.func.isRequired,
};

class MobileInputScreen extends Component {
  static navigationOptions = {
    title: 'Feed Me Your Mobile',
    headerTitleStyle: Styles.headerTitle,
    headerLeft: null,
  };

  onPress = () => {
    if (this.props.mobile.length === 10) {
      this.props.getCode(this.props.mobile);
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

const mapStateToProps = ({ mobile, error }) => ({ mobile, error });

export default connect(mapStateToProps, { getCode })(MobileInputScreen);
