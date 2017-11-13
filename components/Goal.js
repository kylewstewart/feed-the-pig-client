import React, { Component } from 'react';
import { View, TextInput } from 'react-native';
import { connect } from 'react-redux';

import styles from '../styles/GoalStyles';

class Goal extends Component {

  render = () => (
    <View style={styles.screenContainer}>
      <View style={styles.columnOne}>
        <TextInput
          placeholder="Piggy Name"
          style={styles.inputField}
          />
      </View>
    </View>
  );
}

const mapStateToProps = state => ({ state });

export default connect(mapStateToProps)(Goal);
