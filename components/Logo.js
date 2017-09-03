import React from 'react';
import { Image, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  image: {
    marginTop: 50,
    marginBottom: 20,
    height: 100,
    width: 285,
  },
});

function Logo() {
  return (
    <Image
      style={styles.image}
      source={require('../assets/logos/fullLogo.png')}
    />
  );
}

export default Logo;
