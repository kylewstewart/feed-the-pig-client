import { StyleSheet } from 'react-native';

const MobileInputScreenStyles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: 'white',
    paddingLeft: 10,
    paddingRight: 10,
  },
  columnOne: {
    flex: 1,
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
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  inputField: {
    borderColor: 'gray',
    borderWidth: 1,
    fontSize: 20,
    padding: 10,
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
    fontWeight: '600',
  },
});

export default MobileInputScreenStyles;
