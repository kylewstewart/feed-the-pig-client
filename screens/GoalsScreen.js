import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import { connect } from 'react-redux';

import { fetchGoals } from '../actions';

const propTypes = {
  fetchGoals: PropTypes.func.isRequired,
};

class GoalsScreen extends Component {
  componentDidMount = () => this.props.fetchGoals();

  render = () => <View />;
}

GoalsScreen.navigationOptions = {
  title: 'Goals',
  headerLeft: null,
};

GoalsScreen.propTypes = propTypes;

const mapStateToProps = state => ({ state });

export default connect(mapStateToProps, { fetchGoals })(GoalsScreen);
