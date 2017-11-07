
const baseURL = 'http://localhost:3000/api/v1';
// const baseURL = 'https://dgmvlktrln.localtunnel.me/api/v1';


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
export const updateGoal = (token, goal, id) => (
  fetch(`${baseURL}/goals/${id}`, {
    method: 'put',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: `${token}`,
    },
    body: JSON.stringify(goal),
  }).then(response => response.json())
);
