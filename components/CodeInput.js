import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { TextInput } from 'react-native';
import { connect } from 'react-redux';

import Styles from '../styles/CodeInputStyles';
import { codeInput } from '../actions';


const propTypes = {
  code: PropTypes.string.isRequired,
  codeInput: PropTypes.func.isRequired,
};

class CodeInput extends Component {
  handleChangedText = text => this.props.codeInput(text);

  render() {
    return (
      <TextInput
        placeholder="XXXXX"
        keyboardType="numeric"
        style={Styles.inputField}
        onChangeText={this.handleChangedText}
        value={this.props.code}
        textAlign="center"
        autoCorrect={false}
        autoFocus
        autoCapitalize="characters"
        pointerEvents="none"
        maxLength={5}
      />
    );
  }
}

CodeInput.propTypes = propTypes;

const mapStateToProps = state => ({ code: state.code });

export default connect(mapStateToProps, { codeInput })(CodeInput);
