import './Profile.css';
import Header from '../Header/Header';

const Profile = ({ isLoginIn }) => {
  return (
    <>
      <Header isLoginIn={isLoginIn} />
      <main>
        <h1 className='visually-hidden'>Профиль пользователя</h1>
        <section className='profile'>
          <h2 className='profile__title'>Привет, Виталий!</h2>
          <div className="profile__form">
            <form className='profile-form' action="#" method='POST'>
              <fieldset className='profile-form__group'>
                <div className='profile-form__field'>
                  <label className='profile-form__label' htmlFor="profile-name">Имя</label>
                  <input className='profile-form__input' id='profile-name' name='profile-name' type="text" value='Виталий' />
                </div>
                <div className='profile-form__field'>
                  <label className='profile-form__label' htmlFor="profile-email">E-mail</label>
                  <input className='profile-form__input' id='profile-email' type="text" name='profile-email' value='pochta@yandex.ru' />
                </div>
              </fieldset>
              <button className='profile-form__submit' type='submit'>Редактировать</button>
            </form>
          </div>
          <a className='profile__logout' href='/'>Выйти из аккаунта</a>
        </section>
      </main>
    </>
  )
}

export default Profile;
