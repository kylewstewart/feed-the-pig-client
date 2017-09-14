import { StyleSheet } from 'react-native';

const FullLogoStyles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    padding: 10,
  },
  title: {
    flex: 1,
    alignSelf: 'center',
    fontFamily: 'Avenir Next',
    fontSize: 24,
    color: '#005A9C',
    fontWeight: '700',

  },
  imageContainer: {
    flex: 1,
    padding: 10,
  },
  image: {
    flex: 1,
    height: undefined,
    width: undefined,
  },
});

export default FullLogoStyles;
