import React from 'react';
import { View, Text } from 'react-native';

import styles from '../styles/ErrorScreenStyles';
import SpinningPig from '../components/SpinningPig';

const text = "i'm not feeling so good, go back and try again";

const ErrorScreen = () => (
  <View style={styles.screenContainer}>
    <View style={styles.columnTwo}>
      <SpinningPig />
    </View>
    <View style={styles.columnThree}>
      <Text style={styles.text}>
        { text }
      </Text>
    </View>
  </View>
);


export default ErrorScreen;
