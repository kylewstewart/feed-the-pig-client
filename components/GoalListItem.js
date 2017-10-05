import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, Image } from 'react-native';

import styles from '../styles/GoalListItemStyles';

const propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    saved: PropTypes.string.isRequired,
  }).isRequired,
};

const GoalListItem = (props) => {
  const { name, amount, saved } = props.data;

  return (
    <View style={styles.itemContainer}>
      <Image
        style={styles.image}
        source={require('../assets/icons/pig-icon.png')}
        resizeMode="contain"
      />
      <View style={styles.textContainer}>
        <Text style={styles.title}>
          {name}
        </Text>
        <View style={styles.propContainer}>
          <Text style={styles.propOne}>
            Goal: {amount}
          </Text>
          <Text style={styles.propTwo}>
            Saved: {saved}
          </Text>
        </View>
      </View>
    </View>
  );
};

GoalListItem.propTypes = propTypes;

export default GoalListItem;
