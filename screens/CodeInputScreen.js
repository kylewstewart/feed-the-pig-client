import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, TouchableOpacity, Text } from 'react-native';
import { connect } from 'react-redux';

import styles from '../styles/CodeInputScreenStyles';
import FullLogo from '../components/FullLogo';
import CodeInput from '../components/CodeInput';
import { logIn } from '../actions';

const propTypes = {
  code: PropTypes.string.isRequired,
  logIn: PropTypes.func.isRequired,
  userId: PropTypes.number.isRequired,
};

class CodeInputScreen extends Component {
  onPress = () => this.props.logIn(this.props.userId, this.props.code);

  render = () => (
    <View style={styles.screenContainer}>
      <View style={styles.columnOne}>
        <FullLogo />
      </View>
      <View style={styles.columnTwo}>
        <CodeInput />
        <TouchableOpacity onPress={this.onPress} style={styles.button}>
          <Text style={styles.buttonText}>
            submit code
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.columnThree} />
    </View>
  );
}

CodeInputScreen.navigationOptions = {
  title: 'Feed Me Your Code',
  headerTitleStyle: styles.headerTitle,
  headerLeft: null,
};

CodeInputScreen.propTypes = propTypes;

const mapStateToProps = ({ code, userId }) => ({ code, userId });

export default connect(mapStateToProps, { logIn })(CodeInputScreen);
