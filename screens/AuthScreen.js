import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { NavigationActions } from 'react-navigation';

import { authenticate, clearToken } from '../actions';

const propTypes = {
  navigation: PropTypes.shape({
    dispatch: PropTypes.func.isRequired,
  }).isRequired,
  loggedIn: PropTypes.bool.isRequired,
  authenticate: PropTypes.func.isRequired,
};

class AuthScreen extends Component {
  componentDidMount = async () => {
    await this.props.authenticate();
    if (this.props.loggedIn) {
      this.props.navigation.dispatch(NavigationActions.navigate({ routeName: 'main' }));
    } else {
      this.props.navigation.dispatch(NavigationActions.navigate({ routeName: 'mobileInput' }));
    }
  }

  render() {
    return (
      <View>
        <Text> Auth Screen </Text>
      </View>
    );
  }
}

AuthScreen.propTypes = propTypes;

const mapStateToProps = ({ loggedIn }) => ({ loggedIn });

export default connect(mapStateToProps, { authenticate, clearToken })(AuthScreen);
