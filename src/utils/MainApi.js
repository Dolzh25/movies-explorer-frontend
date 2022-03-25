import { apiFetch } from './apiFetch';

const BASE_URL = 'https://api.dolzh-movies.nomoredomains.rocks';

export const getMovies = () =>
  apiFetch({
    BASE_URL,
    path: 'movies',
  });

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
}) => apiFetch({
  BASE_URL,
  path: 'movies',
  method: 'POST',
  body: {
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
  },
});

export const removeMovie = (movieId) =>
  apiFetch({
    BASE_URL,
    path: `movies/${movieId}`,
    method: 'DELETE',
  });

export const getUser = () =>
  apiFetch({
    BASE_URL,
    path: 'users/me',
  });

export const updateProfile = ({ name, email }) =>
  apiFetch({
    BASE_URL,
    path: 'users/me',
    method: 'PATCH',
    body: { name, email },
  });

export const register = ({ name, email, password }) =>
  apiFetch({
    BASE_URL,
    path: 'signup',
    method: 'POST',
    body: { name, email, password },
  });

export const login = ({ email, password }) =>
  apiFetch({
    BASE_URL,
    path: 'signin',
    method: 'POST',
    body: { email, password },
  });

export const checkToken = () =>
  apiFetch({
    BASE_URL,
    path: 'check-auth',
  });

export const logout = () =>
  apiFetch({
    BASE_URL,
    path: 'signout',
    method: 'DELETE',
  });
