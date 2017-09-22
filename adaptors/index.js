const baseURL = 'http://localhost:3000/api/v1';

export default class Adapter {
  static getCode(mobile) {
    return fetch(`${baseURL}/users`, {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({ mobile }),
    }).then(response => response.json());
  }

  static auth(userId, code) {
    return fetch(`${baseURL}/auth`, {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({ userId, code }),
    }).then(response => response.json());
  }

  static currentUser(token) {
    return fetch(`${baseURL}/current_user`, {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': `${token}`,
      },
    }).then(response => response.json());
  }

}
