import React, { Component } from 'react';
import { TextInput, View, Text } from 'react-native';

import Styles from '../styles/MobileInputStyles';

class MobileInput extends Component {
  state= {
    displayMobile: '',
    mobile: '',
    textOne: true,
  }

  getDisplayMobile = (mobile) => {
    const displayMobile = mobile.split('');
    if (displayMobile.length === 0) { displayMobile.slice(0, 0, ''); }
    if (displayMobile.length > 0) { displayMobile.splice(0, 0, '('); }
    if (displayMobile.length > 4) { displayMobile.splice(4, 0, ') '); }
    if (displayMobile.length > 8) { displayMobile.splice(8, 0, '-'); }
    return displayMobile.join('');
  }

  handleChangedText = (text) => {
    const mobile = text.replace(/[^0-9.]+/g, '');
    const displayMobile = this.getDisplayMobile(mobile);
    this.setState({ mobile });
    this.setState({ displayMobile });
  }

  render() {
    return (
      <View style={Styles.container}>
        <Text style={this.state.textOne ? Styles.textDone : Styles.textUndone}>
          Enter your mobile and get a code
        </Text>
        <TextInput
          placeholder="(XXX) XXX-XXXX"
          keyboardType="phone-pad"
          style={Styles.inputField}
          onChangeText={text => this.handleChangedText(text)}
          value={this.state.displayMobile}
          textAlign="center"
          returnKeyType="send"
        />
        <Text style={this.state.textOne ? Styles.textDone : Styles.textUndone}>
          Enter your code
        </Text>
        <Text style={this.state.textOne ? Styles.textDone : Styles.textUndone}>
          LogIn
        </Text>
      </View>
    );
  }
}

export default MobileInput;
