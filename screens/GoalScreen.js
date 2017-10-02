import React, { Component } from 'react';
import { View, TextInput, Text } from 'react-native';
import { connect } from 'react-redux';

import styles from '../styles/GoalScreenStyles';


class GoalScreen extends Component {
  onChange = () => console.log;

  render = () => (
    <View style={styles.screenContainer}>

      <View style={styles.columnOne}>
        <Text style={styles.text}>
          Name
        </Text>
        <TextInput
          placeholder="a brand new bag"
          keyboardType="default"
          autoCorrect={false}
          style={styles.inputField}
          onChangedText={this.onChange()}
        />
      </View>

      <View style={styles.columnOne}>
        <Text style={styles.text}>
          Goal
        </Text>
        <TextInput
          placeholder="X,XXX.XX"
          keyboardType="numeric"
          style={styles.inputField}
          onChangedText={this.onChange()}
        />
      </View>

      <View style={styles.columnOne}>
        <Text style={styles.text}>
          Date
        </Text>
        <TextInput
          placeholder="MM-DD-YY"
          keyboardType="numeric"
          style={styles.inputField}
          onChangedText={this.onChange()}
        />
      </View>

      <View style={styles.columnOne}>
        <Text style={styles.text}>
          Saved
        </Text>
        <TextInput
          placeholder="X,XXX.XX"
          keyboardType="numeric"
          style={styles.inputField}
          onChangedText={this.onChange()}
        />
      </View>

      <View style={styles.columnOne}>
        <Text style={styles.text}>
          Est Return
        </Text>
        <TextInput
          placeholder="X.XX%"
          keyboardType="numeric"
          style={styles.inputField}
          onChangedText={this.onChange()}
        />
      </View>

      <View style={styles.columnThree} />

    </View>
  );
}

GoalScreen.navigationOptions = ({ navigation }) => ({
  title: `${navigation.state.params.header}`,
  tabBarVisible: false,
});

const mapStateToProps = ({ goal }) => ({ title: goal.name, goal });

export default connect(mapStateToProps)(GoalScreen);
