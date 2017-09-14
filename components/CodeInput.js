import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { TextInput } from 'react-native';
import { connect } from 'react-redux';

import Styles from '../styles/CodeInputStyles';
import { codeInputChanged } from '../actions';


const propTypes = {
  code: PropTypes.string.isRequired,
  codeInputChanged: PropTypes.func.isRequired,
};

class CodeInput extends Component {
  handleChangedText = text => this.props.codeInputChanged(text);

  render() {
    return (
      <TextInput
        placeholder="XXXXX"
        keyboardType="default"
        style={Styles.inputField}
        onChangeText={this.handleChangedText}
        value={this.props.code}
        textAlign="center"
        autoCorrect={false}
        autoFocus
        autoCapitalize="characters"
        pointerEvents="none"
        maxLength="5"
      />
    );
  }
}

CodeInput.propTypes = propTypes;

const mapStateToProps = state => ({ code: state.code });

export default connect(mapStateToProps, { codeInputChanged })(CodeInput);
