const BASE_URL = 'https://api.dolzh-movies.nomoredomains.rocks';

const token = localStorage.getItem('token');

const _checkResault = (res) => {
  if (res.ok) {
    return res.json();
  }

  return Promise.reject(res);
};

export const getMovies = (token) => {
  return fetch(`${BASE_URL}/movies`, {
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`
    },
  })
    .then((res) => {
      return _checkResault(res);
    })
}

export const setMovie = ({
  country,
  director,
  duration,
  year,
  description,
  image,
  trailer,
  thumbnail,
  nameRU,
  nameEN,
  movieId,
}) => {
  return fetch(`${BASE_URL}/movies`, {
    method: "POST",
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`
    },
    body: JSON.stringify({
      country,
      director,
      duration,
      year,
      description,
      image,
      trailer,
      thumbnail,
      nameRU,
      nameEN,
      movieId,
    }),
  })
    .then((res) => {
      return _checkResault(res);
    })
}

export const removeMovie = (movieId) => {
  return fetch(`${BASE_URL}/movies/${movieId}`, {
    method: "DELETE",
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`
    },
  })
}

export const getUser = (token) => {
  return fetch(`${BASE_URL}/users/me`, {
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`
    },
  })
    .then((res) => {
      return _checkResault(res);
    })
}

export const updateProfile = ({ name, email }) => {
  return fetch(`${BASE_URL}/users/me`, {
    method: "PATCH",
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`
    },
    body: JSON.stringify({
      "name": name,
      "email": email
    }),
  })
    .then((res) => {
      return _checkResault(res);
    })
}

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
