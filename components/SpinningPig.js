import React, { Component } from 'react';
import { Animated } from 'react-native';

import style from '../styles/SpinningPigStyles';

class SpinningPig extends Component {
  componentWillMount() {
    this.animatedValue = new Animated.Value(0);
  }

  componentDidMount() {
    Animated.timing(this.animatedValue, {
      toValue: 1,
      duration: 24000,
    }).start();
  }

  render() {
    const interpolateRotation = this.animatedValue.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '7200deg'],
    });

    const animatedStyle = {
      transform: [{ rotate: interpolateRotation }],
    };

    return (
      <Animated.Image
        style={[style.image, animatedStyle]}
        source={require('../assets/icons/pig-icon.png')}
        resizeMode="contain"
      />
    );
  }
}

export default SpinningPig;
