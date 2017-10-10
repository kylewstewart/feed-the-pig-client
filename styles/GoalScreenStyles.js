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
    paddingHorizontal: '5%',
  },
  submitContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingLeft: '10%',
    paddingRight: '10%',
  },
  keyboardSpacer: {
    flex: 4,
  },
  inputContainer: {
    flexDirection: 'row',
  },
  buttonContainer: {
    flex: 1,
  },
  text: {
    fontFamily: 'Avenir Next',
    fontSize: 16,
    color: '#005A9C',
    fontWeight: '700',
    width: '30%',
    textAlign: 'left',
  },
  inputField: {
    borderColor: 'gray',
    borderWidth: 0,
    fontSize: 16,
    width: '50%',
    textAlign: 'left',
  },
  dateField: {
    width: '50%',
  },
  dateText: {
    fontSize: 16,
    textAlign: 'left',
  },
  submitButton: {
    borderWidth: 1,
    backgroundColor: '#005A9C',
    borderRadius: 5,
    padding: 10,
  },
  submitButtonText: {
    fontSize: 15,
    color: 'white',
    fontWeight: '600',
  },
  header: {
    paddingHorizontal: 10,
  },
  headerTitle: {
    fontFamily: 'Avenir Next',
    fontSize: 20,
    color: '#005A9C',
    fontWeight: '500',
  },
  headerRightText: {
    fontFamily: 'Avenir Next',
    fontSize: 16,
    color: '#005A9C',
    fontWeight: '500',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  modalSpacer: {
    flex: 10,
  },
  dateButtonContainer: {
    flex: 2,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    padding: 10,
  },
  dateButton: {
    // borderWidth: 1,
    // backgroundColor: '#005A9C',
    padding: 5,
  },
  dateButtonText: {
    fontSize: 16,
    color: 'black',
    fontWeight: '600',
  },
  datePickerContainer: {
    flex: 8,
    backgroundColor: '#CCCCCC',
  },
});

export default GoalScreenStyles;
