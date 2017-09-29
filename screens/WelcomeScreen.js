import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, TouchableOpacity, Text } from 'react-native';
import { connect } from 'react-redux';

import style from '../styles/WelcomeScreenStyles';
import { authenticate, getStarted } from '../actions';
import FullLogo from '../components/FullLogo';

const propTypes = {
  authenticate: PropTypes.func.isRequired,
  getStarted: PropTypes.func.isRequired,
  loggedIn: PropTypes.bool.isRequired,
};

class WelcomeScreen extends Component {
  componentDidMount = () => this.props.authenticate();

  render = () => (
    <View style={style.screenContainer}>
      <View style={style.columnOne}>
        <FullLogo />
      </View>
      <View style={style.columnTwo}>
        <Text>
          Feed the Pig is a digital piggybank in your pocket.
        </Text>
      </View>
      <View style={style.columnThree}>
        <TouchableOpacity
          onPress={() => this.props.getStarted(this.props.loggedIn)}
          style={style.button}
        >
          <Text style={style.buttonText}>
            get started
          </Text>
        </TouchableOpacity>
      </View>
      <View style={style.columnFour} />
    </View>
  );

}

WelcomeScreen.navigationOptions = {
  title: 'Oh, Hello',
  headerTitleStyle: style.headerTitle,
  headerLeft: null,
};

WelcomeScreen.propTypes = propTypes;

const mapStateToProps = ({ loggedIn }) => ({ loggedIn });

export default connect(mapStateToProps, { authenticate, getStarted })(WelcomeScreen);
