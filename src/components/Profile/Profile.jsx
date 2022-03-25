import { useContext } from 'react';
import { Link } from 'react-router-dom';
import Container from '../Container/Container';
import Header from '../Header/Header';
import { useFormWithValidation } from '../../hooks/useFormWithValidation';
import './Profile.css';

import CurrentUserContext from '../../contexts/CurrentUserContext';

const Profile = ({ isLoggedIn, onUpdateProfile, onSignout }) => {
  const user = useContext(CurrentUserContext);

  const { values, handleChange, resetForm, errors, isValid } =
    useFormWithValidation();

  const handleSubmit = (evt) => {
    evt.preventDefault();

    onUpdateProfile({
      name: values.nameUpdate,
      email: values.emailUpdate
    })
      .then(() => {
        resetForm();
      })
  }

  return (
    <>
      <Header isLoggedIn={isLoggedIn} />
      <main>
        <Container>
          <section className='profile'>
            <h2 className='profile__title'>{`Привет, ${user.name}!`}</h2>

            <form
              className='profile__form'
              name='form-update'
              id='form-update'
              onSubmit={handleSubmit}
            >
              <fieldset className='profile__group'>
                <label className='profile__label'>
                  Имя
                  <input
                    type='text'
                    className='profile__input'
                    name='nameUpdate'
                    id='nameUpdate'
                    minLength='2'
                    maxLength='30'
                    onChange={handleChange}
                    placeholder={user.name}
                    value={values.name}
                    required
                  />
                  <p className='profile-form__input-error' id='profile-form-name-error'>{errors.nameUpdate}</p>
                </label>
                <label className='profile__label'>
                  E-mail
                  <input
                    type='email'
                    className='profile__input'
                    name='emailUpdate'
                    id='emailUpdate'
                    onChange={handleChange}
                    placeholder={user.email}
                    value={values.email}
                    required
                  />
                  <p className='profile-form__input-error' id='profile-form-email-error'>{errors.emailUpdate}</p>
                </label>
              </fieldset>
              <p className='profile__submit-error'></p>
              <button className='profile__submit' type='submit' disabled={!isValid}>Редактировать</button>
            </form>
            <Link className='profile__logout' onClick={onSignout} to='/'>Выйти из аккаунта</Link>
          </section>
        </Container>
      </main>
    </>
  )
}

export default Profile;
