import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, TouchableOpacity, Text } from 'react-native';
import { connect } from 'react-redux';
import { NavigationActions } from 'react-navigation';

import style from '../styles/WelcomeScreenStyles';
import { authenticate } from '../actions';
import FullLogo from '../components/FullLogo';

const propTypes = {
  authenticate: PropTypes.func.isRequired,
  loggedIn: PropTypes.bool.isRequired,
  navigation: PropTypes.shape({
    dispatch: PropTypes.func.isRequired,
  }).isRequired,
};

class WelcomeScreen extends Component {
  static navigationOptions = {
    title: 'Welcome',
    headerTitleStyle: style.headerTitle,
  };

  componentDidMount() {
    this.props.authenticate();
  }

  onPress = () => {
    if (this.props.loggedIn) {
      this.props.navigation.dispatch(NavigationActions.navigate({ routeName: 'main' }));
    } else {
      this.props.navigation.dispatch(NavigationActions.navigate({ routeName: 'mobileInput' }));
    }
  }

  render() {
    return (
      <View style={style.screenContainer}>
        <View style={style.columnOne}>
          <FullLogo />
        </View>
        <View style={style.columnTwo} />
        <View style={style.columnThree}>
          <TouchableOpacity onPress={this.onPress} style={style.button}>
            <Text style={style.buttonText}>
              get started
            </Text>
          </TouchableOpacity>
        </View>
        <View style={style.columnFour} />
      </View>
    );
  }
}

WelcomeScreen.propTypes = propTypes;

const mapStateToProps = ({ loggedIn }) => ({ loggedIn });

export default connect(mapStateToProps, { authenticate })(WelcomeScreen);
