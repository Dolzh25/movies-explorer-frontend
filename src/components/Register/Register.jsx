import './Register.css';
import AuthForm from '../AuthForm/AuthForm';
import Container from '../Container/Container';

const Register = () => {
  return (
    <main>
      <Container>
        <AuthForm
          title='Добро пожаловать!'
          formName='signup'
          submitText='Зарегистрироваться'
          text='Уже зарегистрированы?'
          pathLink='/sign-in'
          textLink='Войти'
        >
          <label className='auth-form__label'>
            Имя
            <input type='text' name='user-name' className='auth-form__input' required />
          </label>
          <label className='auth-form__label'>
            E-mail
            <input type='email' name='user-email' className='auth-form__input' required />
          </label>
          <label className='auth-form__label'>
            Пароль
            <input type='password' name='user-password' className='auth-form__input' required />
          </label>
        </AuthForm>
      </Container>
    </main>
  )
}

export default Register;