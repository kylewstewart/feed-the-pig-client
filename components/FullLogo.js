import React from 'react';
import { View, Text, Image } from 'react-native';

import styles from '../styles/FullLogoStyles';

const FullLogo = () => (
  <View style={styles.container}>
    <Text style={styles.title}> Feed the Pig </Text>
    <View style={styles.imageContainer}>
      <Image
        style={styles.image}
        source={require('../assets/icons/pig-icon.png')}
        resizeMode="contain"
      />
    </View>
  </View>
);

export default FullLogo;
