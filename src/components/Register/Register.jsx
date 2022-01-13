import { Link } from 'react-router-dom';
import logoPath from '../../images/logo.svg';
import AuthForm from '../AuthForm/AuthForm';
import './Register.css';

const Register = () => {
  return (
    <>
      <main>
        <h1 className='visually-hidden'>Страница регистрация нового пользователя</h1>

        <section className='register'>
          <h2 className='visually-hidden'>Форма регистрации нового пользователя</h2>
          <img className='register__logo' src={logoPath} alt="logo" />
          <p className='register__title'>Добро пожаловать!</p>

          <div className="register__form">
            <AuthForm
              name='register-form'
              buttonText='Зарегистрироваться'
            >
              <div className="auth-form__field">
                <label className='auth-form__label' htmlFor="register-name">Имя</label>
                <input className='auth-form__input' id='register-name' name='register-name' type="text" />
                <span className="auth-form__input-error name-input-error"></span>
              </div>
              <div className="auth-form__field">
                <label className='auth-form__label' htmlFor="register-email">E-mail</label>
                <input className='auth-form__input' id='register-email' name='register-email' type="email" value="pochta@yandex.ru" />
                <span className="auth-form__input-error email-input-error"></span>
              </div>
              <div className="auth-form__field">
                <label className='auth-form__label' htmlFor="register-password">Пароль</label>
                <input className='auth-form__input' id='register-password' name='register-password' type="password" value="Виталий" />
                <span className="auth-form__input-error password-input-error"></span>
              </div>
            </AuthForm>
          </div>
          <p className='register__additional-text'>Уже зарегистрированы? <Link className='register__additional-link' to="/signin">Войти</Link></p>
        </section>
      </main>
    </>
  )
}

export default Register;