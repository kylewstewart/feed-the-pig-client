import React, { Component } from 'react';
import { View, TextInput, Text, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import styles from '../styles/GoalScreenStyles';

const propTypes = {
  goal: PropTypes.shape({
    name: PropTypes.string.isRequired,
    amount: PropTypes.number.isRequired,
    saved: PropTypes.number.isRequired,
    date: PropTypes.string.isRequired,
    rate: PropTypes.number.isRequired,
  }).isRequired,
};

class GoalScreen extends Component {
  state = {
    name: this.props.goal.name,
    amount: this.props.goal.amount.toString(),
    date: this.props.goal.date,
    saved: this.props.goal.saved.toString(),
    rate: this.props.goal.rate.toString(),
  };

  onChange = text => this.setState({ [text.field]: text.input });

  render = () => (
    <View style={styles.screenContainer}>

      <View style={styles.inputContainer}>
        <Text style={styles.text}> Name </Text>
        <TextInput
          placeholder="a brand new bag"
          keyboardType="default"
          autoCorrect={false}
          style={styles.inputField}
          onChangeText={text => this.onChange({ input: text, field: 'name' })}
          value={this.state.name}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.text}> Goal </Text>
        <TextInput
          placeholder="XXXX.XX"
          keyboardType="numeric"
          style={styles.inputField}
          onChangeText={text => this.onChange({ input: text, field: 'goal' })}
          value={this.state.amount}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.text}> Date </Text>
        <TextInput
          placeholder="MM-DD-YY"
          keyboardType="numeric"
          style={styles.inputField}
          onChangeText={text => this.onChange({ input: text, field: 'date' })}
          value={this.state.date}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.text}> Saved </Text>
        <TextInput
          placeholder="X,XXX.XX"
          keyboardType="numeric"
          style={styles.inputField}
          onChangeText={text => this.onChange({ input: text, field: 'saved' })}
          value={this.state.saved}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.text}> Est. Return </Text>
        <TextInput
          placeholder="X.XX%"
          keyboardType="numeric"
          style={styles.inputField}
          onChangeText={text => this.onChange({ input: text, field: 'saved' })}
          value={this.state.rate}
        />
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={this.onPress} style={styles.button}>
          <Text style={styles.buttonText}>
            submit
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.keyboardSpacer} />

    </View>
  );
}

GoalScreen.navigationOptions = ({ navigation }) => ({
  title: `${navigation.state.params.header}`,
  tabBarVisible: false,
});

GoalScreen.propTypes = propTypes;

const mapStateToProps = ({ goal }) => ({ title: goal.name, goal });

export default connect(mapStateToProps)(GoalScreen);
