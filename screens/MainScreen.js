import React from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';

function MainScreen() {
  return (
    <View>
      <Text> Main Screen </Text>
      <Text> { this.props.userId } </Text>
      <Text> { this.props.token } </Text>
    </View>
  );
}

const mapStateToProps = state => ({ userId: state.userId, token: state.token });

export default connect(mapStateToProps)(MainScreen);
