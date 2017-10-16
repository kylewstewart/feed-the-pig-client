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
  const routeName = 'goal';
  const header = goal.name;
  dispatch(NavigationActions.navigate({ routeName, params: { header } }));
};

export const addNew = () => (dispatch) => {
  dispatch({ type: types.CLEAR_GOAL });
  const routeName = 'goal';
  const header = 'New Pig';
  dispatch(NavigationActions.navigate({ routeName, params: { header } }));
};

export const submitGoal = (id, name, amount, date, saved, rate) => async (dispatch) => {
  const token = await AsyncStorage.getItem('token');
  const goal = {
    name,
    date,
    amount: (amount.replace(/[^\d]/g, '') / 100).toFixed(2),
    saved: (saved.replace(/[^\d]/g, '') / 100).toFixed(2),
    rate: (rate.replace(/[^\d]/g, '') / 10000).toFixed(2),
  };
  if (!id) {
    const savedGoal = await adaptors.createGoal(token, goal);
    dispatch({ type: types.ADD_GOAL, payload: savedGoal });
    dispatch(NavigationActions.navigate({ routeName: 'goals' }));
  } else {
    const updatedGoal = await adaptors.updateGoal(token, goal, id);
    dispatch({ type: types.UPDATE_GOAL, payload: updatedGoal, id });
  }
};
