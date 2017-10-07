import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Image, Text, FlatList, View, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';

import { setGoal, addNew } from '../actions';
import styles from '../styles/GoalsScreenStyles';
import GoalListItem from '../components/GoalListItem';

const propTypes = {
  addNew: PropTypes.func.isRequired,
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
  componentDidMount() {
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

GoalsScreen.navigationOptions = ({ navigation }) => ({
  title: 'Your Pigs',
  headerTitleStyle: styles.headerTitle,
  headerLeft: null,
  headerRight: (
    <TouchableOpacity onPress={() => navigation.state.params.addNew()}>
      <View style={styles.headerRightContainer}>
        <Text style={styles.headerRightText}> new </Text>
        <Image
          style={styles.image}
          source={require('../assets/icons/pig-icon.png')}
          resizeMode="contain"
        />
      </View>
    </TouchableOpacity>
  ),
});


GoalsScreen.propTypes = propTypes;

const mapStateToProps = ({ goals }) => ({ goals });

export default connect(mapStateToProps, { setGoal, addNew })(GoalsScreen);
