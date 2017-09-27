import { StyleSheet } from 'react-native';

const ErrorScreenStyles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: 'white',
    paddingLeft: 10,
    paddingRight: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  columnOne: {
    flex: 2,
  },
  columnTwo: {
    flex: 1,
  },
  columnThree: {
    flex: 1,
  },
  columnFour: {
    flex: 2,
  },
  text: {
    fontFamily: 'Avenir Next',
    fontSize: 18,
    color: '#005A9C',
    fontWeight: '500',
  },
});

export default ErrorScreenStyles;
