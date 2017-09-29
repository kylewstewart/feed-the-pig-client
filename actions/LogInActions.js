import { AsyncStorage } from 'react-native';
import { NavigationActions } from 'react-navigation';

import * as Adaptors from '../adaptors';
import * as Types from './types';

export const getStarted = loggedIn => (dispatch) => {
  if (loggedIn) {
    dispatch(NavigationActions.navigate({ routeName: 'main' }));
  } else {
    dispatch({ type: Types.CLEAR_MOBILE });
    dispatch({ type: Types.CLEAR_CODE });
    dispatch(NavigationActions.navigate({ routeName: 'mobileInput' }));
  }
};

export const mobileInput = text => (
  { type: Types.MOBILE_INPUT, payload: text }
);

export const codeInput = text => (
  { type: Types.CODE_INPUT, payload: text }
);

export const logOut = () => (dispatch) => {
  AsyncStorage.removeItem('token');
  dispatch({ type: Types.CLEAR_LOGGED_IN });
  dispatch(NavigationActions.navigate({ routeName: 'welcome' }));
};

export const getCode = mobile => async (dispatch) => {
  const response = await Adaptors.getCode(mobile);
  if (response.error) {
    dispatch({ type: Types.CLEAR_MOBILE });
    dispatch(NavigationActions.navigate({ routeName: 'error' }));
  } else {
    dispatch({ type: Types.SET_USER_ID, payload: response.id });
    dispatch(NavigationActions.navigate({ routeName: 'codeInput' }));
  }
};

export const setUserID = id => (
  { type: Types.SET_USER_ID, payload: id }
);

export const setToken = token => async (dispatch) => {
  await AsyncStorage.setItem('token', token);
  dispatch({ type: Types.SET_TOKEN, payload: token });
};

export const logIn = (userId, code) => async (dispatch) => {
  const response = await Adaptors.auth(userId, code);
  if (response.error) {
    dispatch({ type: Types.CLEAR_LOGGED_IN });
    dispatch({ type: Types.CLEAR_CODE });
    dispatch(NavigationActions.navigate({ routeName: 'error' }));
  } else {
    await AsyncStorage.setItem('token', response.token);
    dispatch({ type: Types.SET_TOKEN, payload: response.token });
    dispatch({ type: Types.SET_LOGGED_IN });
    dispatch(NavigationActions.navigate({ routeName: 'main' }));
  }
};

export const authenticate = () => async (dispatch) => {
  const token = await AsyncStorage.getItem('token');
  if (!token) {
    dispatch({ type: Types.CLEAR_LOGGED_IN });
  } else {
    dispatch({ type: Types.SET_IS_LOADING });
    const response = await Adaptors.currentUser(token);
    if (response.error) {
      AsyncStorage.removeItem('token');
      dispatch({ type: Types.CLEAR_TOKEN });
      dispatch({ type: Types.CLEAR_LOGGED_IN });
      dispatch({ type: Types.CLEAR_IS_LOADING });
    } else {
      dispatch({ type: Types.SET_USER_ID, payload: response.id });
      dispatch({ type: Types.SET_LOGGED_IN });
      dispatch({ type: Types.CLEAR_IS_LOADING });
    }
  }
};
