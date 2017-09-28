import { StyleSheet } from 'react-native';

const ErrorScreenStyles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: 'white',
    paddingLeft: 10,
    paddingRight: 10,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  columnOne: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  columnTwo: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  columnThree: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  columnFour: {
    flex: 1,
  },
  text: {
    fontFamily: 'Avenir Next',
    fontSize: 18,
    color: '#005A9C',
    fontWeight: '500',
  },
  button: {
    borderWidth: 1,
    backgroundColor: '#005A9C',
    padding: 10,
  },
  buttonText: {
    fontFamily: 'Avenir Next',
    fontSize: 18,
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

export default ErrorScreenStyles;
