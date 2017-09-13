import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { TextInput } from 'react-native';
import { connect } from 'react-redux';
import { mobileInputChanged } from '../actions';

import Styles from '../styles/MobileInputStyles';

class MobileInput extends Component {
  handleChangedText = text => this.props.mobileInputChanged(text);

  displayMobile = () => {
    const displayMobile = this.props.mobile.split('');
    if (displayMobile.length === 0) { displayMobile.slice(0, 0, ''); }
    if (displayMobile.length > 0) { displayMobile.splice(0, 0, '('); }
    if (displayMobile.length > 5) { displayMobile.splice(4, 0, ') '); }
    if (displayMobile.length > 8) { displayMobile.splice(8, 0, '-'); }
    return displayMobile.join('');
  }

  render() {
    return (
      <TextInput
        placeholder="(XXX) XXX-XXXX"
        keyboardType="phone-pad"
        style={Styles.inputField}
        onChangeText={this.handleChangedText}
        value={this.props.mobile ? this.displayMobile() : null}
        textAlign="center"
        returnKeyType="send"
      />
    );
  }
}

MobileInput.propTypes = {
  mobile: PropTypes.string,
  mobileInputChanged: PropTypes.func.isRequired,
};

MobileInput.defaultProps = {
  mobile: null,
};

const mapStateToProps = state => ({ mobile: state.mobile });

export default connect(mapStateToProps, { mobileInputChanged })(MobileInput);
