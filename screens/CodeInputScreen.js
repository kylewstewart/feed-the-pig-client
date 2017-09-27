import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, TouchableOpacity, Text } from 'react-native';
import { connect } from 'react-redux';

import Styles from '../styles/CodeInputScreenStyles';
import FullLogo from '../components/FullLogo';
import CodeInput from '../components/CodeInput';
import { logIn } from '../actions';

const propTypes = {
  code: PropTypes.string.isRequired,
  logIn: PropTypes.func.isRequired,
  userId: PropTypes.number.isRequired,
};

class CodeInputScreen extends Component {
  static navigationOptions = {
    title: 'Feed Me Your Code',
    headerTitleStyle: Styles.headerTitle,
    headerLeft: null,
  };

  onPress = () => {
    const { userId, code } = this.props;
    this.props.logIn(userId, code);
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

CodeInputScreen.propTypes = propTypes;

const mapStateToProps = ({ code, userId }) => ({ code, userId });

export default connect(mapStateToProps, { logIn })(CodeInputScreen);
