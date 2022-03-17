import { useState } from 'react';
import { Link } from 'react-router-dom';
import Container from '../Container/Container';
import Header from '../Header/Header';
import './Profile.css';

const Profile = ({ loggedIn, onSignOut }) => {
  const [name, setName] = useState('Виталий');
  const [email, setEmail] = useState('pochta@yandex.ru');

  const handleChangeName = (evt) => {
    setName(evt.target.value)
  }

  const handleChangeEmail = (evt) => {
    setEmail(evt.target.value)
  }

  const handleLogoutClick = () => {
    onSignOut();
  }

  return (
    <>
      <Header loggedIn={loggedIn} />
      <main>
        <Container>
          <section className='profile'>
            <h2 className='profile__title'>Привет, Виталий!</h2>

            <form action='#' className='profile__form'>
              <fieldset className='profile__group'>
                <label className='profile__label'>
                  Имя
                  <input type='text' className='profile__input' onChange={handleChangeName} value={name} />
                </label>
                <label className='profile__label'>
                  E-mail
                  <input type='email' className='profile__input' onChange={handleChangeEmail} value={email} />
                </label>
              </fieldset>
              <button className='profile__submit' type='submit'>Редактировать</button>
            </form>
            <Link className='profile__logout' onClick={handleLogoutClick} to='/'>Выйти из аккаунта</Link>
          </section>
        </Container>
      </main>
    </>
  )
}

export default Profile;
