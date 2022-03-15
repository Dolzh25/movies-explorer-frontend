export const moviesApi = () => {
  fetch('https://api.nomoreparties.co/beatfilm-movies')
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
    })
    .then((data) => {
      console.log(data);
    })
    .catch(err => err.message)
};
