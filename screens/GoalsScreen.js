import React from 'react';
import PropTypes from 'prop-types';
import { Text, FlatList, View, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';

import { setGoal } from '../actions';
import styles from '../styles/GoalsScreenStyles';
import GoalListItem from '../components/GoalListItem';

const propTypes = {
  goals: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      amount: PropTypes.number.isRequired,
      date: PropTypes.string.isRequired,
      rate: PropTypes.number.isRequired,
    }),
  ).isRequired,
  setGoal: PropTypes.func.isRequired,
};

const GoalsScreen = props => (
  <View style={styles.screenContainer}>
    <View style={styles.listContainer}>
      <FlatList
        data={props.goals}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => props.setGoal(item.id, props.goals)}>
            <GoalListItem data={item} />
          </TouchableOpacity>
        )}
      />
    </View>
  </View>
);

GoalsScreen.navigationOptions = {
  title: 'Your Pigs',
  headerTitleStyle: styles.headerTitle,
  headerLeft: null,
};

GoalsScreen.propTypes = propTypes;

const mapStateToProps = ({ goals }) => ({ goals });

export default connect(mapStateToProps, { setGoal })(GoalsScreen);
