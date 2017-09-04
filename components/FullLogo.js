import React from 'react';
import { View, Image } from 'react-native';

import Styles from '../styles/FullLogoStyles';

function FullLogo() {
  return (
    <View style={Styles.container}>
      <Image
        style={Styles.logo}
        source={require('../assets/logos/fullLogo.png')}
        resizeMode="contain"
      />
    </View>
  );
}

export default FullLogo;
