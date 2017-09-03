import { StyleSheet } from 'react-native';

const FullLogoStyles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    marginLeft: 20,
    marginRight: 20,
    justifyContent: 'center',
  },
  logo: {
    flex: 1,
    height: undefined,
    width: undefined,
  },
  textContainer: {
    flex: 2,
    alignItems: 'center',
  },
  title: {
    flex: 1,
    fontSize: 30,
  },
  subtitle: {
    flex: 1,
  },
});

export default FullLogoStyles;
