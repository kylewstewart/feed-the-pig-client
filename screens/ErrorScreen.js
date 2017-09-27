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
};

class ErrorScreen extends Component {

  onPress = () => {
    const route = this.returnRoute();
    this.props.navigation.dispatch(NavigationActions.navigate({ routeName: route }))
  }

  returnRoute = () => {
    const { routes } = this.props.nav;
    return routes[routes.length - 2].routeName;
  };

  render() {
    const text = "i'm not feeling so good, go back and try again";


    return (
      <View style={styles.screenContainer}>
        <View style={styles.columnTwo}>
          <SpinningPig />
        </View>
        <View style={styles.columnThree}>
          <Text style={styles.text}>
            { text }
          </Text>
        </View>
        <View style={styles.columnThree} >
          <TouchableOpacity
            onPress={this.onPress}
            style={styles.button}
          >
            <Text style={styles.buttonText}>
              go back
            </Text>
          </TouchableOpacity>

        </View>
      </View>
    );
  }
}

ErrorScreen.propTypes = propTypes;

const mapStateToProps = ({ nav }) => ({ nav });

export default connect(mapStateToProps)(ErrorScreen);
