import { StyleSheet } from 'react-native';

const GoalListItemStyles = StyleSheet.create({
  itemContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    // justifyContent: 'center',
    padding: 10,
  },
  image: {
    height: 50,
    width: 50,
  },
  imageContainer: {
    flex: 1,
  },
  textContainer: {
    flex: 1,
    flexDirection: 'column',
    padding: 10,
    paddingLeft: 20,
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  title: {
    fontFamily: 'Avenir Next',
    fontSize: 18,
    color: '#005A9C',
    fontWeight: '700',
  },
  propContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  propOne: {
    flex: 1,
    fontFamily: 'Avenir Next',
    fontSize: 14,
    color: '#005A9C',
    fontWeight: '400',
  },
  propTwo: {
    flex: 1,
    fontFamily: 'Avenir Next',
    fontSize: 14,
    color: '#005A9C',
    fontWeight: '400',
  },
  propThree: {
    flex: 1,
  },
});

export default GoalListItemStyles;
