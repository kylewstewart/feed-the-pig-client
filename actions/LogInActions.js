import { AsyncStorage } from 'react-native';
import Adaptors from '../adaptors';
import {
  MOBILE_INPUT,
  CODE_INPUT,
  SET_USER_ID,
  SET_TOKEN,
  CLEAR_TOKEN,
  SET_LOGGED_IN,
  CLEAR_LOGGED_IN,
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
  const response = await Adaptors.auth(userId, code);
  if (response.error) {
    console.log('LogIn Error:', response.error);
    dispatch({ type: CLEAR_LOGGED_IN });
  } else {
    console.log('Logged In');
    await AsyncStorage.setItem('token', response.token);
    dispatch({ type: SET_LOGGED_IN });
    dispatch({ type: SET_TOKEN, payload: response.token });
  }
};

export const authenticate = () => async (dispatch) => {
  const token = await AsyncStorage.getItem('token');
  if (!token) {
    console.log('No Token');
    dispatch({ type: CLEAR_LOGGED_IN });
  } else {
    const response = await Adaptors.currentUser(token);
    if (response.error) {
      console.log('Token Error', response.error);
      dispatch({ type: CLEAR_LOGGED_IN });
      dispatch({ type: CLEAR_TOKEN });
    } else {
      console.log('authenticated')
      dispatch({ type: SET_LOGGED_IN });
      dispatch({ type: SET_USER_ID, payload: response.id });
    }
  }
};
