import { AsyncStorage } from 'react-native';
import { NavigationActions } from 'react-navigation';

import * as adaptors from '../adaptors';
import * as types from './types';

export const fetchGoals = () => async (dispatch) => {
  const token = await AsyncStorage.getItem('token');
  const goals = await adaptors.goals(token);
  dispatch({ type: types.SET_GOALS, payload: goals });
};

export const setGoal = (id, goals) => (dispatch) => {
  const goal = goals.find(g => g.id === id);
  dispatch({ type: types.SET_GOAL, payload: goal });
  dispatch(NavigationActions.navigate({ routeName: 'goal', params: { header: goal.name } }));
};

export const addNew = () => (dispatch) => {
  dispatch({ type: types.CLEAR_GOAL });
  const routeName = 'goal';
  const header = 'New Pig';
  dispatch(NavigationActions.navigate({ routeName, params: { header } }));
};

export const submitGoal = goal => async (dispatch) => {
  const token = await AsyncStorage.getItem('token');
  if (!goal.id) {
    const savedGoal = await adaptors.createGoal(token, goal);
    dispatch({ type: types.ADD_GOAL, payload: savedGoal });
    dispatch(NavigationActions.navigate({ routeName: 'goals' }));
  }
};
