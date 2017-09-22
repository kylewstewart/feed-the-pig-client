import React, { Component } from 'react';
import { Modal, Animated, View, Text } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import style from '../styles/LoadingStyles';

const propTypes = ({
  isLoading: PropTypes.bool.isRequired,
});

class LoadingComponent extends Component {
  componentWillMount() {
    this.animatedValue = new Animated.Value(0);
  }

  componentDidMount() {
    Animated.timing(this.animatedValue, {
      toValue: 1,
      duration: 2400,
    }).start();
  }

  render() {
    const interpolateRotation = this.animatedValue.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '720deg'],
    });

    const animatedStyle = {
      transform: [{ rotate: interpolateRotation }],
    };

    return (
      <Modal
        visible={this.props.isLoading}
        animationType="fade"
        transparent
        presentationSyle="pageSheet"
      >
        <View style={style.container}>
          <Text style={style.text}>
            give me a second
          </Text>
          <Animated.Image
            style={[style.image, animatedStyle]}
            source={require('../assets/icons/pig-icon.png')}
            resizeMode="contain"
          />
        </View>
      </Modal>
    );
  }
}

LoadingComponent.propTypes = propTypes;

const mapStateToProps = ({ isLoading }) => ({ isLoading });

export default connect(mapStateToProps)(LoadingComponent);
