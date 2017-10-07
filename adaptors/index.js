import ip from 'ip';

const baseURL = 'http://localhost:3000/api/v1';

export const getCode = mobile => (
  fetch(`${baseURL}/users`, {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({ mobile }),
  }).then(response => response.json())
);

export const auth = (userId, code) => (
  fetch(`${baseURL}/auth`, {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({ userId, code }),
  }).then(response => response.json())
);

export const currentUser = token => (
  fetch(`${baseURL}/current_user`, {
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: `${token}`,
    },
  }).then(response => response.json())
);

export const goals = token => (
  fetch(`${baseURL}/goals`, {
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: `${token}`,
    },
  }).then(response => response.json())
);

export const createGoal = (token, goal) => (
  fetch(`${baseURL}/goals`, {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: `${token}`,
    },
    body: JSON.stringify(goal),
  }).then(response => response.json())
);
