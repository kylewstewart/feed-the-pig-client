import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { logOut } from '../actions',

function MainScreen(props) {
  return (
    <View>
      <Text> Main Screen </Text>
        <TouchableOpacity onPress={this.onPress} style={Styles.button}>
          <Text style={Styles.buttonText}>
            submit code
          </Text>
        </TouchableOpacity>
    </View>
  );
}

const mapStateToProps = state => ({ userId: state.userId });

export default connect(mapStateToProps, { logOut })(MainScreen);
