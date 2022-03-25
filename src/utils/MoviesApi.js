export const BASE_URL = 'https://api.nomoreparties.co';

export const moviesApi = () => {
  return fetch(`${BASE_URL}/beatfilm-movies`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
    },
  })
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
    })
};
