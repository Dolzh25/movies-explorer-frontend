import { useState, useEffect } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Login from '../Login/Login';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import NotFound from '../NotFound/NotFound';
import Profile from '../Profile/Profile';
import Register from '../Register/Register';
import TooltipPopup from '../TooltipPopup/TooltipPopup';

import './App.css';
import * as api from '../../utils/MainApi';
import * as apiBeatFilm from '../../utils/MoviesApi';
import * as utils from '../../utils/utils';
import { messageSuccess, fetchErrorMessage, updateProfileErrorMessage } from '../../utils/constants';

import imgSuccess from '../../images/success.svg';
import imgFail from '../../images/fail.svg';

import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import CurrentUserContext from "../../contexts/CurrentUserContext";

function App() {
  const [currentUser, setCurrentUser] = useState({});
  const [searchValue, setSearchValue] = useState({});

  const [messageTooltipPopup, setMessageTooltipPopup] = useState('');
  const [imgTooltipPopup, setImgTooltipPopup] = useState('');

  const [movies, setMovies] = useState([]);
  const [savedMovieIds, setSavedMovieIds] = useState([]);
  const [savedMovies, setSavedMovies] = useState([]);
  const [searchedMovies, setSearchedMovies] = useState([]);
  const [searchedSavedMovies, setSearchedSavedMovies] = useState([]);

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isTooltipPopupOpen, setIsTooltipPopupOpen] = useState(false);
  const [isSearching, setIsSearching] = useState(false);
  const [isAuthChecking, setIsAuthChecking] = useState(true);

  const navigate = useNavigate();

  const showError = (message) => {
    setMessageTooltipPopup(message);
    setImgTooltipPopup(imgFail);
    setIsTooltipPopupOpen(true);
  };

  const showSuccess = (message) => {
    message ? setMessageTooltipPopup(message) : setMessageTooltipPopup(messageSuccess);
    setImgTooltipPopup(imgSuccess);
    setIsTooltipPopupOpen(true);
  };

  const successfulAuth = async (token) => {
    setIsLoggedIn(true);
    setIsLoading(true);

    try {
      const [user, savedMovies, apiMovies] = await Promise.all([
        api.getUser(token),
        api.getMovies(token),
        apiBeatFilm.moviesApi(),
      ]);
      setCurrentUser(user);
      setSavedMovies(savedMovies);
      setSearchedSavedMovies(savedMovies);

      const saveIds = savedMovies.map((movie) => movie.movieId);
      setSavedMovieIds(saveIds);

      const resParsed = utils.parseMovies(apiMovies, apiBeatFilm.BASE_URL);
      setMovies(resParsed);
    } catch {
      setIsLoading(false);
      showError(fetchErrorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  const checkAuth = async () => {
    const token = localStorage.getItem('token');

    if (token) {
      await api.checkToken(token)
        .then(() => {
          successfulAuth(token)
        })
        .catch((err) => {
          console.log(err);
        })
    }
  };

  const handleLogin = async (email, password) => {
    try {
      const res = await api.login({ email, password })
      localStorage.setItem('token', res.token);
      checkAuth();
      navigate('/movies');
    } catch (err) {
      showError(err.message);
      setIsLoggedIn(false);
    }
  };

  const handleRegister = async (name, email, password) => {
    try {
      const res = await api.register({ name, email, password })
      navigate('/signin');
      showSuccess(res.message);
    } catch (err) {
      showError(err.message);
    }
  };

  const handleSignout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem('token');
    navigate('/');
    setIsSearching(true);
  };

  const handleUpdateProfile = async ({ name, email }) => {
    try {
      const updateUser = await api.updateProfile({ name, email });
      setCurrentUser(updateUser);
    } catch (err) {
      console.log(err);
      showError(updateProfileErrorMessage);
    }
  };

  const saveMovie = async (movieData) => {
    try {
      const savedMovie = await api.setMovie(movieData);

      setSavedMovies([savedMovie, ...savedMovies]);
      setSavedMovieIds([...savedMovieIds, savedMovie.movieId]);
      setSearchedSavedMovies([savedMovie, ...savedMovies]);
    } catch (err) {
      showError(err.message);
    }
  };

  const removeMovie = async (movieId) => {
    try {
      await api.removeMovie(movieId);
      const filteredMovies = savedMovies.filter((movie) => movie.movieId !== movieId);
      const filteredMoviesIds = savedMovieIds.filter((id) => id !== movieId);

      setSavedMovies(filteredMovies);
      setSavedMovieIds(filteredMoviesIds);
      setSearchedSavedMovies(filteredMovies);

      return;
    } catch (err) {
      showError(err.message);
    }
  };

  const searchSavedMovies = (keyword, isCheckbox) => {
    setIsLoading(true);

    try {
      const filteredMovies = utils.searchByKeyword(savedMovies, keyword, isCheckbox);
      setSearchedSavedMovies(filteredMovies);
    } catch (err) {
      showError(fetchErrorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  const searchMovies = (keyword, isCheckbox) => {
    setIsLoading(true);
    setIsSearching(true);

    try {
      const filteredMovies = utils.searchByKeyword(movies, keyword, isCheckbox);
      setSearchedMovies(filteredMovies);
      setSearchValue({ ...searchValue, keyword: keyword });
      localStorage.setItem('searchedMovies', JSON.stringify(filteredMovies));
      localStorage.setItem('searchValue', JSON.stringify({ isCheckbox, keyword }));
    } catch (err) {
      showError(fetchErrorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    setIsAuthChecking(true);
    checkAuth()
      .then(() => {
        setIsAuthChecking(false);
      })
      .catch((err) => {
        console.log(err);
      })
  }, []);

  useEffect(() => {
    const localSearchMovies = localStorage.getItem('searchedMovies');
    const localSearchValue = localStorage.getItem('searchValue');

    if (isLoggedIn && localSearchValue && localSearchMovies) {
      setSearchedMovies(JSON.parse(localSearchMovies));
      setSearchValue(JSON.parse(localSearchValue));
      setIsSearching(true);
    }
    return;
  }, [isLoggedIn]);

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className='App'>
        <Routes>
          <Route path='/' element={<Main isLoggedIn={isLoggedIn} />}></Route>

          <Route element={<ProtectedRoute isLoggedIn={isLoggedIn} />} >
            <Route path='/movies' element={
              <Movies
                isLoggedIn={isLoggedIn}
                isLoading={isLoading}
                isChecking={isAuthChecking}
                isSearching={isSearching}
                movies={searchedMovies}
                searchValue={searchValue}
                savedMoviesIds={savedMovieIds}
                searchMovies={searchMovies}
                saveMovie={saveMovie}
                removeMovie={removeMovie}
              />
            }>
            </Route>
            <Route path='/saved-movies' element={
              <SavedMovies
                isLoggedIn={isLoggedIn}
                isChecking={isAuthChecking}
                movies={searchedSavedMovies}
                searchMovies={searchSavedMovies}
                removeMovie={removeMovie}
              />
            }>
            </Route>
            <Route path='/profile' element={
              <Profile
                isLoggedIn={isLoggedIn}
                component={Profile}
                isChecking={isAuthChecking}
                onUpdateProfile={handleUpdateProfile}
                onSignout={handleSignout}
              />
            }>
            </Route>
          </Route>

          <Route path='/signin' element={<Login onLogin={handleLogin} />}></Route>
          <Route path='/signup' element={<Register onRegister={handleRegister} />}></Route>
          <Route path='/*' element={<NotFound />}></Route>
        </Routes>
        <TooltipPopup
          image={imgTooltipPopup}
          message={messageTooltipPopup}
          isOpen={isTooltipPopupOpen}
          setIsOpen={setIsTooltipPopupOpen}
        />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
