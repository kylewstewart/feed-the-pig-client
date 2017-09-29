import { AsyncStorage } from 'react-native';
import { NavigationActions } from 'react-navigation';

import * as Adaptors from '../adaptors';
import * as Types from './types';

export const fetchGoals = () => async (dispatch) => {
  const token = await AsyncStorage.getItem('token');
  const goals = await Adaptors.goals(token);
  console.log(goals);
  dispatch({ type: Types.SET_GOALS, payload: goals });
};
