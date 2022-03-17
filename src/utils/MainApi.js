const BASE_URL = 'https://api.dolzh-movies.nomoredomains.rocks';

const _checkResault = (res) => {
  if (res.ok) {
    return res.json();
  }

  return Promise.reject(res);
};

export const register = ({ name, email, password }) => {
  return fetch(`${BASE_URL}/signup`, {
    method: "POST",
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      "name": name,
      "email": email,
      "password": password
    })
  })
    .then((res) => {
      return _checkResault(res);
    })
};

export const login = ({ email, password }) => {
  return fetch(`${BASE_URL}/signin`, {
    method: "POST",
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify({
      "email": email,
      "password": password
    })
  })
    .then((res) => {
      return _checkResault(res)
    })
};

export const checkToken = (token) => {
  return fetch(`${BASE_URL}/users/me`, {
    method: "GET",
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`
    }
  })
    .then((res) => {
      return _checkResault(res)
    })
};
