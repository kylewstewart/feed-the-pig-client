import { StyleSheet } from 'react-native';

const MobileInputStyles = StyleSheet.create({
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
  label: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  button: {
    borderWidth: 1,
    backgroundColor: 'cornflowerblue',
    padding: 10,
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
    fontWeight: 'bold',
  },
});

export default MobileInputStyles;
