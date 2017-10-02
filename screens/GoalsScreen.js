import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Text, FlatList, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';


const propTypes = {
};

class GoalsScreen extends Component {
  onPress(id) {
    console.log('on press', id);
  }

  render() {
    return (
      <FlatList
        data={this.props.goals}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => this.onPress(item.id)}>
            <Text>
              {item.name}
            </Text>
          </TouchableOpacity>
        )}
      />
    );
  }
}

GoalsScreen.navigationOptions = {
  title: 'Goals',
  headerLeft: null,
};

GoalsScreen.propTypes = propTypes;

const mapStateToProps = ({ goals }) => ({ goals });

export default connect(mapStateToProps)(GoalsScreen);
