import React from 'react';
import { View, Text, Image } from 'react-native';

import Styles from '../styles/FullLogoStyles';

function FullLogo() {
  return (
    <View style={Styles.container}>
      <Text style={Styles.title}> Feed the Pig </Text>
      <View style={Styles.imageContainer}>
        <Image
          style={Styles.image}
          source={require('../assets/icons/pig-icon.png')}
          resizeMode="contain"
        />
      </View>
    </View>
  );
}

export default FullLogo;
