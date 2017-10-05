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

  onChange = text => this.setState(prevState => (
    { [text.field]: this.formatedInput(text, prevState) }),
  );

  formatedInput = ({ field, input }, prevState) => {
    switch (field) {
      case 'name': {
        return input;
      }
      case 'saved':
      case 'amount': {
        if (input === '$0.0') return '';
        const unformatted = input.replace(/[^\d]/g, '');
        const numWithDecimals = (Number(unformatted) / 100).toFixed(2);
        const split = numWithDecimals.split('.');
        return ['$', Number(split[0]).toLocaleString(), (split[1] ? `.${split[1]}` : '')].join('');
      }
      case 'date': {
        const unformatted = input.replace(/[^\d]/g, '');
        const split = unformatted.split('');
        if (split.length > 8) return prevState.date;
        if (split.length > 4) split.splice(4, 0, '/');
        if (split.length > 2) split.splice(2, 0, '/');
        return split.join('');
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
            placeholder="$X,XXX.XX"
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
            placeholder="$X,XXX.XX"
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
            onChangeText={text => this.onChange({ input: text, field: 'rate' })}
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
