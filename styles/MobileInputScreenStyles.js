import { StyleSheet } from 'react-native';

const MobileInputScreenStyles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: 'white',
    paddingLeft: 10,
    paddingRight: 10,
    justifyContent: 'space-around',
  },
  columnOne: {
    flex: 1,
  },
  columnTwo: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  columnThree: {
    height: '50%',
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
    fontWeight: '500',
  },
});

export default MobileInputScreenStyles;
