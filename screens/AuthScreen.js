import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import { connect } from 'react-redux';

import { authenticate } from '../actions';
import LoadingComponent from '../components/LoadingComponent';

const propTypes = {
  authenticate: PropTypes.func.isRequired,
};

class AuthScreen extends Component {
  componentDidMount() {
    this.props.authenticate();
  }

  render = () => (
    <View>
      <LoadingComponent />
    </View>
  );
}

AuthScreen.propTypes = propTypes;

const mapStateToProps = state => ({ state });

export default connect(mapStateToProps, { authenticate })(AuthScreen);
