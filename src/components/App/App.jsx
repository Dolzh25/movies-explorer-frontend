import { useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Login from '../Login/Login';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import NotFound from '../NotFound/NotFound';
import Profile from '../Profile/Profile';
import Register from '../Register/Register';

import './App.css';
import * as api from '../../utils/MainApi';
import { moviesApi } from '../../utils/MoviesApi';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import CurrentUserContext from "../../contexts/CurrentUserContext";

function App() {
  const [loggedIn, setLoggedIn] = useState(true);
  const [currentUser, setCurrentUser] = useState({});
  const navigate = useNavigate();


  const handleCheckToken = () => {
    const token = localStorage.getItem("token")
    if (token) {
      api.checkToken(token)
        .then((res) => {
          setLoggedIn(true);
          // setEmail(res.email);
          navigate('/');
        })
        .catch((err) => {
          console.log(err);
          if (err.status === 400) console.log("Токен не передан или передан не в том формате");
          if (err.status === 401) console.log("Переданный токен некорректен");
        });
    }
  };

  const handleRegister = (email, password) => {
    api.register(email, password)
      .then(() => {
        // setIsSuccess(true);
        // setEmail(email);
        navigate('/signin');
      })
      .catch((err) => {
        // setIsSuccess(false);
        console.log(err);
        if (err.status === 400) console.log("Некорректно заполнено одно из полей");
      })
      .finally(() => {
        // setIsSuccessPopupOpen(true);
      })
  };

  const handleLogin = (email, password) => {
    api.login(email, password)
      .then((jwt) => {
        if (jwt) {
          setLoggedIn(true);
          // setEmail(email);
          navigate('/');
          localStorage.setItem("token", jwt.token);
        }
      })
      .catch((err) => {
        console.log(err);
        if (err.status === 400) console.log("Не передано одно из полей");
        if (err.status === 401) console.log("Пользователь с email не найден");
      })
  };

  const handleSignOut = () => {
    const token = localStorage.getItem("token")
    if (token) {
      localStorage.removeItem("token")
      setLoggedIn(false);
      navigate('/signin');
    }
  };

  const searchMovies = async () => {

    if (!localStorage.getItem('movies')) {
      moviesApi()
        .then((movies) => {
          localStorage.setItem('movies', JSON.stringify(movies))
        })
    }

  };

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className='App'>
        <Routes>
          <Route path='/' element={<Main loggedIn={loggedIn} />}></Route>
          <Route path='/movies' element={
            <ProtectedRoute loggedIn={loggedIn}>
              <Movies loggedIn={loggedIn} searchMovies={searchMovies} />
            </ProtectedRoute>
          }>
          </Route>
          <Route path='/saved-movies' element={
            <ProtectedRoute loggedIn={loggedIn}>
              <SavedMovies loggedIn={loggedIn} />
            </ProtectedRoute>
          }>
          </Route>
          <Route path='/profile' element={
            <ProtectedRoute loggedIn={loggedIn}>
              <Profile loggedIn={loggedIn} onSignOut={handleSignOut} />
            </ProtectedRoute>
          }>
          </Route>
          <Route path='/signin' element={<Login onLogin={handleLogin} />}></Route>
          <Route path='/signup' element={<Register onRegister={handleRegister} />}></Route>
          <Route path='*' element={<NotFound />}></Route>
        </Routes>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
