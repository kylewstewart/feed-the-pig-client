import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Text, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';

import { logOut } from '../actions';

const propTypes = {
  logOut: PropTypes.func.isRequired,
};

class MainScreen extends Component {
  onPress = () => this.props.logOut();

  render() {
    return (
      <View>
        <Text> Main Screen </Text>
        <TouchableOpacity onPress={this.onPress}>
          <Text >
            Log Out
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

MainScreen.propTypes = propTypes;

const mapStateToProps = state => ({ state });

export default connect(mapStateToProps, { logOut })(MainScreen);
