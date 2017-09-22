import { AsyncStorage } from 'react-native';
import { NavigationActions } from 'react-navigation';

import Adaptors from '../adaptors';
import {
  MOBILE_INPUT,
  CODE_INPUT,
  SET_USER_ID,
  SET_TOKEN,
  CLEAR_TOKEN,
} from './types';

export const mobileInput = text => (
  { type: MOBILE_INPUT, payload: text }
);

export const codeInput = text => (
  { type: CODE_INPUT, payload: text }
);

export const getCode = mobile => async (dispatch) => {
  const { id } = await Adaptors.getCode(mobile);
  dispatch({ type: SET_USER_ID, payload: id });
};

export const setUserID = id => (
  { type: SET_USER_ID, payload: id }
);

export const setToken = token => async (dispatch) => {
  await AsyncStorage.setItem('token', token);
  dispatch({ type: SET_TOKEN, payload: token });
};

export const clearToken = () => async (dispatch) => {
  await AsyncStorage.clear('token');
  dispatch({ type: CLEAR_TOKEN });
};

export const logIn = (userId, code) => async (dispatch) => {
  const { token } = await Adaptors.auth(userId, code);
  console.log(token);
  // await AsyncStorage.setItem('token', token);
  dispatch({ type: SET_TOKEN, payload: token });
};

// const userId = await Adaptors.currentUser(token);
// dispatch({ type: SET_USER_ID, payload: userId });
// dispatch({ type: SET_TOKEN, payload: token });
// export const authenticate = async (dispatch) => {
//   const token = await AsyncStorage.getItem('token');
//   console.log('token', token);
// if (token) {
//   console.log('route main');
//   dispatch(NavigationActions.navigate({ routeName: 'main' }));
// } else {
//   console.log('route mobileInput');
//   dispatch(NavigationActions.navigate({ routeName: 'mobileInput' }));
// }
// };
