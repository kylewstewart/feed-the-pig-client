import { StyleSheet } from 'react-native';

const MobileInputStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'yellow',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  inputField: {
    borderColor: 'gray',
    borderWidth: 1,
    fontSize: 20,
    padding: 10,
  },
  textDone: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  textUnDone: {
    fontSize: 15,
    fontWeight: 'normal',
  },
});

export default MobileInputStyles;
