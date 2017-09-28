import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Text, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { NavigationActions } from 'react-navigation';

import styles from '../styles/ErrorScreenStyles';
import SpinningPig from '../components/SpinningPig';

const propTypes = {
  nav: PropTypes.shape({
    routes: PropTypes.array.isRequired,
  }).isRequired,
  navigation: PropTypes.shape({
    dispatch: PropTypes.func.isRequired,
  }).isRequired,
};

class ErrorScreen extends Component {
  static navigationOptions = {
    title: 'Danger Will Robinson',
    headerTitleStyle: styles.headerTitle,
    headerLeft: null,
  };

  onPress = () => {
    const route = this.returnRoute();
    const { dispatch } = this.props.navigation;
    dispatch(NavigationActions.navigate({ routeName: route }));
  }

  returnRoute = () => {
    const { routes } = this.props.nav;
    return routes[routes.length - 2].routeName;
  };

  render() {
    const text = "i don't feel so good, go back and feed me something else.";

    return (
      <View style={styles.screenContainer}>
        <View style={styles.columnOne}>
          <Text style={styles.text}>
            { text }
          </Text>
        </View>
        <View style={styles.columnTwo}>
          <SpinningPig />
        </View>
        <View style={styles.columnThree} >
          <TouchableOpacity onPress={this.onPress} style={styles.button}>
            <Text style={styles.buttonText}>go back</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.columnFour} />
      </View>
    );
  }
}

ErrorScreen.propTypes = propTypes;

const mapStateToProps = ({ nav }) => ({ nav });

export default connect(mapStateToProps)(ErrorScreen);
