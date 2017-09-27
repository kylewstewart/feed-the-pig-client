import { AsyncStorage } from 'react-native';
import { NavigationActions } from 'react-navigation';

import Adaptors from '../adaptors';
import * as type from './types';

export const mobileInput = text => (
  { type: type.MOBILE_INPUT, payload: text }
);

export const codeInput = text => (
  { type: type.CODE_INPUT, payload: text }
);

export const logOut = () => (dispatch) => {
  AsyncStorage.removeItem('token');
  dispatch({ type: type.CLEAR_LOGGED_IN });
  dispatch(NavigationActions.navigate({ routeName: 'mobileInput' }));
};

export const getCode = mobile => async (dispatch) => {
  const response = await Adaptors.getCode(mobile);
  if (response.error) {
    dispatch({ type: type.SET_ERROR, payload: response.error });
    dispatch({ type: type.CLEAR_MOBILE });
    dispatch(NavigationActions.navigate({ routeName: 'error' }));
  } else {
    dispatch({ type: type.CLEAR_ERROR });
    dispatch({ type: type.SET_USER_ID, payload: response.id });
    dispatch(NavigationActions.navigate({ routeName: 'codeInput' }));
  }
};

export const setUserID = id => (
  { type: type.SET_USER_ID, payload: id }
);

export const setToken = token => async (dispatch) => {
  await AsyncStorage.setItem('token', token);
  dispatch({ type: type.SET_TOKEN, payload: token });
};

export const logIn = (userId, code) => async (dispatch) => {
  dispatch({ type: type.SET_IS_LOADING });
  const response = await Adaptors.auth(userId, code);
  if (response.error) {
    dispatch({ type: type.CLEAR_LOGGED_IN });
    dispatch({ type: type.CLEAR_IS_LOADING });
  } else {
    await AsyncStorage.setItem('token', response.token);
    dispatch({ type: type.SET_TOKEN, payload: response.token });
    dispatch({ type: type.SET_LOGGED_IN });
    dispatch(NavigationActions.navigate({ routeName: 'main' }));
    dispatch({ type: type.CLEAR_IS_LOADING });
  }
};

export const authenticate = () => async (dispatch) => {
  const token = await AsyncStorage.getItem('token');
  if (!token) {
    dispatch({ type: type.CLEAR_LOGGED_IN });
  } else {
    dispatch({ type: type.SET_IS_LOADING });
    const response = await Adaptors.currentUser(token);
    if (response.error) {
      AsyncStorage.removeItem('token');
      dispatch({ type: type.CLEAR_TOKEN });
      dispatch({ type: type.CLEAR_LOGGED_IN });
      dispatch({ type: type.CLEAR_IS_LOADING });
    } else {
      dispatch({ type: type.SET_USER_ID, payload: response.id });
      dispatch({ type: type.SET_LOGGED_IN });
      dispatch({ type: type.CLEAR_IS_LOADING });
    }
  }
};

// dispatch(NavigationActions.navigate({ routeName: 'mobileInput' }));
// dispatch(NavigationActions.navigate({ routeName: 'mobileInput' }));
// dispatch(NavigationActions.navigate({ routeName: 'main' }));
