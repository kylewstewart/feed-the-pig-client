import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: 'white',
    padding: 10,
  },
  listContainer: {
    flex: 1,
  },
  headerTitle: {
    fontFamily: 'Avenir Next',
    fontSize: 20,
    color: '#005A9C',
    fontWeight: '500',
  },
  image: {
    height: 35,
    width: 35,
  },
  headerRightContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerRightText: {
    fontFamily: 'Avenir Next',
    fontSize: 16,
    color: '#005A9C',
    fontWeight: '500',
  },
});

export default styles;
