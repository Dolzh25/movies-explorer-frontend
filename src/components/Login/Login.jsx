import Container from '../Container/Container';
import './Login.css';
import AuthForm from '../AuthForm/AuthForm';

import { useFormWithValidation } from '../../hooks/useFormWithValidation';

const Login = ({ onLogin }) => {

  const { values, handleChange, resetFrom, errors, isValid } =
    useFormWithValidation();

  const handleSubmit = (evt) => {
    evt.preventDefault();

    onLogin(values.userEmail, values.userPassword)
      .then(resetFrom);
  }

  return (
    <main>
      <Container>
        <AuthForm
          title='Рады видеть!'
          formName='login'
          submitText='Войти'
          text='Ещё не зарегистрированы?'
          pathLink='/sign-up'
          textLink='Регистрация'
          onSubmit={handleSubmit}
          isValid={isValid}
        >
          <label htmlFor='' className='auth-form__label'>
            E-mail
            <input
              type='email'
              name='userName'
              id='userName'
              className='auth-form__input'
              onChange={handleChange}
              required />
            <span className="auth-form__error" id='register-form-email-error'>{errors.userEmail}</span>
          </label>
          <label htmlFor='' className='auth-form__label'>
            Пароль
            <input
              type='password'
              name='userPassword'
              id='userPassword'
              className='auth-form__input'
              onChange={handleChange}
              required />
            <span className="auth-form__error" id='register-form-password-error'>{errors.userPassword}</span>
          </label>
        </AuthForm>
      </Container>
    </main>
  )
}

export default Login;