import { AsyncStorage } from 'react-native';

const baseURL = 'http://localhost:3000/api/v1';

function headers() {
  return {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'Authorization': AsyncStorage.getItem('token'),
  };
}

export default class Adapter {
  static getCode(mobile) {
    return fetch(`${baseURL}/users`, {
      method: 'post',
      headers: headers(),
      body: JSON.stringify({ mobile }),
    }).then(response => response.json());
  }

  static auth(userId, code) {
    return fetch(`${baseURL}/auth`, {
      method: 'post',
      headers: headers(),
      body: JSON.stringify({ userId, code }),
    }).then(response => response.json());
  }

  static currentUser() {
    return fetch(`${baseURL}/current_user`, {
      headers: headers(),
    }).then(response => response.json());
  }

}
