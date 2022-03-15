import './Register.css';
import AuthForm from '../AuthForm/AuthForm';
import Container from '../Container/Container';

import { useFormWithValidation } from '../../hooks/useFormWithValidation';

const Register = ({ onRegister }) => {

  const { values, handleChange, resetFrom, errors, isValid } =
    useFormWithValidation();

  const handleSubmit = (evt) => {
    evt.preventDefault();

    onRegister(values.userName, values.userEmail, values.userPassword)
      .then(resetFrom);
  }

  return (
    <main>
      <Container>
        <AuthForm
          title='Добро пожаловать!'
          formName='signup'
          submitText='Зарегистрироваться'
          text='Уже зарегистрированы?'
          pathLink='/signin'
          textLink='Войти'
          onSubmit={handleSubmit}
          isValid={isValid}
        >
          <label className='auth-form__label'>
            Имя
            <input
              type='text'
              name="userName"
              id="userName"
              minLength="2"
              maxLength="30"
              className='auth-form__input'
              onChange={handleChange}
              required
            />
            <span className="auth-form__error" id='register-form-name-error'>{errors.userName}</span>
          </label>
          <label className='auth-form__label'>
            E-mail
            <input
              type='email'
              name='userEmail'
              id='userEmail'
              className='auth-form__input'
              onChange={handleChange}
              required />
            <span className="auth-form__error" id='register-form-email-error'>{errors.userEmail}</span>
          </label>
          <label className='auth-form__label'>
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

export default Register;