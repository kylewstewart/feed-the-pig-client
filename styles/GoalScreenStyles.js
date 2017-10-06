import { StyleSheet } from 'react-native';

const GoalScreenStyles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: 'white',
    padding: 10,
  },
  goalContainer: {
    flex: 5,
    justifyContent: 'space-around',
  },
  submitContainer: {
    flex: 1,
  },
  keyboardSpacer: {
    flex: 4,
  },

  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontFamily: 'Avenir Next',
    fontSize: 16,
    color: '#005A9C',
    fontWeight: '700',
    width: '40%',
  },
  inputField: {
    borderColor: 'gray',
    borderWidth: 0,
    fontSize: 16,
    width: '60%',
  },
  dateField: {
    width: '60%',
  },
  dateText: {
    fontSize: 16,
  },
  button: {
    borderWidth: 1,
    backgroundColor: '#005A9C',
    padding: 10,
  },
  buttonText: {
    fontFamily: 'Avenir Next',
    fontSize: 16,
    color: 'white',
    fontWeight: 'bold',
  },
  headerTitle: {
    fontFamily: 'Avenir Next',
    fontSize: 20,
    color: '#005A9C',
    fontWeight: '500',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  modalSpacer: {
    flex: 12,
  },
  dateButtonContainer: {
    flex: 2,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    padding: 10,
  },
  dateButton: {
    borderWidth: 1,
    backgroundColor: '#005A9C',
    padding: 5,
  },
  datePickerContainer: {
    flex: 8,
    backgroundColor: '#CCCCCC',
  },
});

export default GoalScreenStyles;
