import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from '../Login/Login';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import NotFound from '../NotFound/NotFound';
import Profile from '../Profile/Profile';
import Register from '../Register/Register';

import './App.css';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Main loggedIn={loggedIn} />}></Route>
        <Route path='/movies' element={
          <ProtectedRoute loggedIn={loggedIn}>
            <Movies loggedIn={loggedIn} />
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
            <Profile loggedIn={loggedIn} />
          </ProtectedRoute>
        }>
        </Route>
        <Route path='/signin' element={<Login />}></Route>
        <Route path='/signup' element={<Register />}></Route>
        <Route path='*' element={<NotFound />}></Route>
      </Routes>
    </div>
  );
}

export default App;
