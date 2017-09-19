const url = 'http://localhost:3000/api/v1';

function headers() {
  return {
    'content-type': 'application/json',
    'accept': 'application/json',
    // 'Authorization': localStorage.getItem('jwt')
  };
}

export default class Adapter {

  static getCode(mobile) {
    return fetch(`${url}/users`, {
      method: 'post',
      headers: headers(),
      body: JSON.stringify({ mobile }),
    }).then(response => response.json())
  }

}
