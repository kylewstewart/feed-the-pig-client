import React, { Component } from 'react';
import { View, TextInput, Text, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import styles from '../styles/GoalScreenStyles';

const propTypes = {
  goal: PropTypes.shape({
    name: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    saved: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    rate: PropTypes.string.isRequired,
  }).isRequired,
};

class GoalScreen extends Component {
  state = {
    name: this.props.goal.name,
    amount: this.props.goal.amount,
    date: this.props.goal.date,
    saved: this.props.goal.saved,
    rate: this.props.goal.rate,
  };

  onChange = text => this.setState({ [text.field]: this.formatedInput(text) });

  formatedInput = ({ field, input }) => {
    switch (field) {
      case 'name': {
        return input;
      }
      case 'amount': {
        return input.replace(/[^\d]/g, '')
      }
      default:
        return input;
    }
  }

  render() {
    const { name, amount, date, saved, rate } = this.state;

    return (
      <View style={styles.screenContainer}>
        <View style={styles.inputContainer}>
          <Text style={styles.text}> Name </Text>
          <TextInput
            placeholder="a brand new bag"
            keyboardType="default"
            autoCorrect={false}
            style={styles.inputField}
            onChangeText={text => this.onChange({ input: text, field: 'name' })}
            value={name}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.text}> Goal </Text>
          <TextInput
            placeholder="XXXX.XX"
            keyboardType="numeric"
            style={styles.inputField}
            onChangeText={text => this.onChange({ input: text, field: 'amount' })}
            value={amount}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.text}> Date </Text>
          <TextInput
            placeholder="MM/DD/YY"
            keyboardType="numeric"
            style={styles.inputField}
            onChangeText={text => this.onChange({ input: text, field: 'date' })}
            value={date}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.text}> Saved </Text>
          <TextInput
            placeholder="X,XXX.XX"
            keyboardType="numeric"
            style={styles.inputField}
            onChangeText={text => this.onChange({ input: text, field: 'saved' })}
            value={saved}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.text}> Est. Return </Text>
          <TextInput
            placeholder="X.XX%"
            keyboardType="numeric"
            style={styles.inputField}
            onChangeText={text => this.onChange({ input: text, field: 'saved' })}
            value={rate}
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
}

GoalScreen.navigationOptions = ({ navigation }) => ({
  title: `${navigation.state.params.header}`,
  tabBarVisible: false,
});

GoalScreen.propTypes = propTypes;

const mapStateToProps = ({ goal }) => ({ title: goal.name, goal });

export default connect(mapStateToProps)(GoalScreen);
