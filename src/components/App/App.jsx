import { Route, Routes } from "react-router-dom";
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Login from '../Login/Login';
import Register from '../Register/Register';
import NotFoundPage from '../NotFoundPage/NotFoundPage';

const App = () => {
  const isLoginIn = true;

  return (
    <>
      <Routes>
        <Route path="/" element={<Main isLoginIn={isLoginIn} />} />
        <Route path="movies" element={<Movies isLoginIn={isLoginIn} />} />
        <Route path="saved-movies" element={<SavedMovies isLoginIn={isLoginIn} />} />
        <Route path="profile" element={<Profile isLoginIn={isLoginIn} />} />
        <Route path="signup" element={<Register />} />
        <Route path="signin" element={<Login />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
};

export default App;
