import { StyleSheet } from 'react-native';

const SpinningPigStyles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 50,
  },
  image: {
    flex: 1,
    height: 50,
  },
  text: {
    flex: 1,
    fontFamily: 'Avenir Next',
    fontSize: 16,
    color: '#005A9C',
    fontWeight: '700',
  },
});

export default SpinningPigStyles;
