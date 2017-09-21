import { AsyncStorage } from 'react-native';
import Adaptors from '../adaptors';
import {
  MOBILE_INPUT,
  CODE_INPUT,
  USER_ID,
  SET_TOKEN,
  NAV_CHANGE,
} from './types';

export const mobileInput = text => (
  { type: MOBILE_INPUT, payload: text }
);

export const codeInput = text => (
  { type: CODE_INPUT, payload: text }
);

export const getCode = mobile => (dispatch) => {
  Adaptors.getCode(mobile)
    .then(user => dispatch({ type: USER_ID, payload: user.id }));
};

const authPayload = () => 'mobile';
// const authPayload = async () => {
//   const { token } = await AsyncStorage.getItem('auth');
//   return token ? 'main' : 'mobile';
// };

export const authenticate = () => {
  const screen = authPayload();
  return { type: NAV_CHANGE, payload: screen };
};

// export const login = (userId, code) => async (dispatch) => {
//   const { jwt } = await Adaptors.auth(userId, code);
//   const authProps = { token: jwt, userId };
//   console.log(authProps);
  // await AsyncStorage.setItem('auth', authProps);
// };
