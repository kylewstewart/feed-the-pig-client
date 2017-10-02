import { AsyncStorage } from 'react-native';
import { NavigationActions } from 'react-navigation';

import * as Adaptors from '../adaptors';
import * as Types from './types';

export const fetchGoals = () => async (dispatch) => {
  const token = await AsyncStorage.getItem('token');
  const goals = await Adaptors.goals(token);
  dispatch({ type: Types.SET_GOALS, payload: goals });
};

export const setGoal = (id, goals) => (dispatch) => {
  const goal = goals.find(g => g.id === id);
  dispatch({ type: Types.SET_GOAL, payload: goal });
  dispatch(NavigationActions.navigate({
    routeName: 'goal',
    params: { header: goal.name },
  }));
};
