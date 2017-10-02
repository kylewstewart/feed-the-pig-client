import React from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';

const GoalScreen = () => <View />;

GoalScreen.navigationOptions = ({ navigation }) => ({
  title: `${navigation.state.params.header}`,
  tabBarVisible: false,
});

const mapStateToProps = ({ goal }) => ({ title: goal.name, goal });

export default connect(mapStateToProps)(GoalScreen);
