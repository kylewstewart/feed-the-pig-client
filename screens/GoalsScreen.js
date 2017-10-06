import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FlatList, View, TouchableOpacity, Button } from 'react-native';
import { connect } from 'react-redux';
import { NavigationActions } from 'react-navigation';

import { setGoal } from '../actions';
import styles from '../styles/GoalsScreenStyles';
import GoalListItem from '../components/GoalListItem';

const propTypes = {
  goals: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      date: PropTypes.instanceOf(Date).isRequired,
      rate: PropTypes.string.isRequired,
    }),
  ).isRequired,
  setGoal: PropTypes.func.isRequired,
};

class GoalsScreen extends Component {
  static navigationOptions = {
    title: 'Your Pigs',
    headerTitleStyle: styles.headerTitle,
    header: props => ({
      left: null,
      right: (
        <Button
          title={'Add a Pig'}
          onPress={() => props.navigate({ routeName: 'goals' })}
        />
    ),
    }),
  }
  render = () => (
    <View style={styles.screenContainer}>
      <View style={styles.listContainer}>
        <FlatList
          data={this.props.goals}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => this.props.setGoal(item.id, this.props.goals)}>
              <GoalListItem data={item} />
            </TouchableOpacity>
          )}
        />
      </View>
    </View>
  );
}

// GoalsScreen.navigationOptions = props => ({
//   title: 'Your Pigs',
//   headerTitleStyle: styles.headerTitle,
//   headerLeft: null,
//   headerRight: ((props) => (
//     <Button
//       title={'Add a Pig'}
//       onPress={() => props.navigate({ routeName: 'goals' })}
//     />
//   ))
// });

GoalsScreen.propTypes = propTypes;

const mapStateToProps = ({ goals }) => ({ goals });

export default connect(mapStateToProps, { setGoal })(GoalsScreen);
