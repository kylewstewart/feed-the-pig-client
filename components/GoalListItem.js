import React, { Component } from 'react';
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

class GoalListItem extends Component {
  displayNum = (num) => {
    if (!num) return '0.00';
    const parts = num.toFixed(2).split('.');
    return parts[0].replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,') + (parts[1] ? `.${parts[1]}` : '');
  };

  render() {
    const { name, amount, saved } = this.props.data;

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
  }
}

GoalListItem.propTypes = propTypes;

export default GoalListItem;
