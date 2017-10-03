import { StyleSheet } from 'react-native';

const GoalScreenStyles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: 'white',
    padding: 10,
    justifyContent: 'space-around',
  },
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  keyboardSpacer: {
    height: '40%',
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
});

export default GoalScreenStyles;
