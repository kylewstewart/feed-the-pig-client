import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FlatList, View, TouchableOpacity, Button } from 'react-native';
import { connect } from 'react-redux';

import { setGoal, addNew } from '../actions';
import styles from '../styles/GoalsScreenStyles';
import GoalListItem from '../components/GoalListItem';

const propTypes = {
  navigation: PropTypes.shape({
    setParams: PropTypes.func.isRequried,
  }).isRequired,
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
  static navigationOptions = navigation => ({
    title: 'Your Pigs',
    headerTitleStyle: styles.headerTitle,
    headerLeft: null,
    headerRight: (
      <Button
        title={'Add a Pig'}
        onPress={navigation.state.params.addNew}
      />
    ),
  });

  componentWillMount() {
    this.props.navigation.setParams({ addNew: this.props.addNew });
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

// GoalsScreen.navigationOptions = navigation => ({
//   title: 'Your Pigs',
//   headerTitleStyle: styles.headerTitle,
//   headerLeft: null,
//   headerRight: (
//     <Button
//       title={'Add a Pig'}
//       onPress={navigation.state.params.addNew}
//     />
//   ),
// });


GoalsScreen.propTypes = propTypes;

const mapStateToProps = ({ goals }) => ({ goals });

export default connect(mapStateToProps, { setGoal, addNew })(GoalsScreen);
