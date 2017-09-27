import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, TouchableOpacity, Text } from 'react-native';
import { connect } from 'react-redux';

import SpinningPig from '../components/SpinningPig';

class ErrorScreen extends Component {

  render() {
    return (
      <View>
        <SpinningPig />
      </View>
    );
  }
}

const mapStateToProps = state => ({ state });

export default connect(mapStateToProps)(ErrorScreen);
