import React, { Component } from 'react';
import { View, TextInput, Text, TouchableOpacity, DatePickerIOS, Modal } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import styles from '../styles/GoalScreenStyles';
import { submitGoal } from '../actions';

const propTypes = {
  navigation: PropTypes.shape({
    setParams: PropTypes.func.isRequired,
  }).isRequired,
  goal: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    saved: PropTypes.string.isRequired,
    date: PropTypes.instanceOf(Date).isRequired,
    rate: PropTypes.string.isRequired,
  }).isRequired,
  submitGoal: PropTypes.func.isRequired,
};

class GoalScreen extends Component {
  state = { showSubmit: true, showDatePicker: false }

  componentWillMount = () => {
    this.setPropsToState();
    this.props.navigation.setParams({ submitGoal: this.save });
  }

  save = () => {
    const { id, name, amount, date, saved, rate } = this.state;
    this.props.submitGoal(id, name, amount, date, saved, rate);
  };

  onReset = () => this.setPropsToState();

  onChange = text => this.setState({ [text.field]: this.formatedInput(text) });

  onDatePress = () => this.setState(prevState => ({
    showDatePicker: !prevState.showDatePicker,
    showSubmit: !!prevState.showDatePicker,
  }));

  setPropsToState = () => {
    const { id, name, amount, date, saved, rate } = this.props.goal;
    this.setState({ id, name, amount, date, saved, rate });
  };

  formatedInput = ({ field, input }) => {
    switch (field) {
      case 'saved':
      case 'amount': {
        if (input === '$0.0') return '';
        const digitsOnly = input.replace(/[^\d]/g, '');
        const numWithDecimals = (Number(digitsOnly) / 100).toFixed(2);
        const split = numWithDecimals.split('.');
        return ['$', Number(split[0]).toLocaleString(), (split[1] ? `.${split[1]}` : '')].join('');
      }
      case 'rate': {
        const unformatted = input.replace(/[^\d]/g, '');
        const numWithDecimals = (Number(unformatted) / 100).toFixed(2);
        const split = numWithDecimals.split('.');
        return [Number(split[0]).toLocaleString(), (split[1] ? `.${split[1]}` : ''), '%'].join('');
      }
      default:
        return input;
    }
  }

  render() {
    const { name, amount, date, saved, rate, showDatePicker, showSubmit } = this.state;

    return (
      <View style={styles.screenContainer}>

        <View style={styles.goalContainer}>
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
            <TouchableOpacity style={styles.dateField} onPress={this.onDatePress}>
              <Text style={styles.dateText}>
                {date.toLocaleDateString()}
              </Text>
            </TouchableOpacity>
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
            <Text style={styles.text}> Rate </Text>
            <TextInput
              placeholder="X.XX%"
              keyboardType="numeric"
              style={styles.inputField}
              selection={{ start: rate.length - 1, end: rate.length - 1 }}
              onChangeText={text => this.onChange({ input: text, field: 'rate' })}
              value={rate}
            />
          </View>
        </View>

        {showSubmit ?
          <View style={styles.submitContainer}>
            <TouchableOpacity onPress={this.onSubmit} style={styles.submitButton}>
              <Text style={styles.submitButtonText}>
                submit
              </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={this.onReset} style={styles.submitButton}>
              <Text style={styles.submitButtonText}>
                reset
              </Text>
            </TouchableOpacity>
          </View> :
          <View style={styles.submitContainer} />
        }

        <View style={styles.keyboardSpacer} />

        <Modal
          animationType="slide"
          visible={showDatePicker}
          transparent
        >
          <View style={styles.modalContainer}>
            <View style={styles.modalSpacer} />
            <View style={styles.dateButtonContainer}>
              <TouchableOpacity style={styles.dateButton} onPress={this.onDatePress}>
                <Text style={styles.dateButtonText}> close </Text>
              </TouchableOpacity>
            </View>
            <View style={styles.datePickerContainer}>
              <DatePickerIOS
                date={date}
                minimumDate={new Date()}
                onDateChange={text => this.onChange({ input: text, field: 'date' })}
                mode="date"
              />
            </View>
          </View>
        </Modal>

      </View>
    );
  }
}

GoalScreen.navigationOptions = ({ navigation }) => ({
  title: `${navigation.state.params.header}`,
  tabBarVisible: false,
  headerTitleStyle: styles.headerTitle,
  headerStyle: styles.header,
  headerRight: (
    <TouchableOpacity onPress={() => navigation.state.params.submitGoal()}>
      <Text style={styles.headerRightText}> Save </Text>
    </TouchableOpacity>
  ),
});

GoalScreen.propTypes = propTypes;

const mapStateToProps = ({ goal }) => ({ title: goal.name, goal });

export default connect(mapStateToProps, { submitGoal })(GoalScreen);
