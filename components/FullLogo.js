import React from 'react';
import { View, Image, Text } from 'react-native';

import Styles from '../styles/FullLogoStyles';

function FullLogo() {
  return (
    <View style={Styles.container}>
      <Image
        style={Styles.logo}
        source={require('../assets/logos/piggy.png')}
        resizeMode="contain"
      />
      <View style={Styles.textContainer}>
        <Text style={Styles.title}>I Want ...</Text>
        <Text style={Styles.subtitle}>save every day</Text>
      </View>
    </View>
  );
}

export default FullLogo;
