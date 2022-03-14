import Container from '../Container/Container';
import './Login.css';
import AuthForm from '../AuthForm/AuthForm';

const Login = () => {
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
        >
          <label htmlFor='' className='auth-form__label'>
            E-mail
            <input type='email' name='user-name' className='auth-form__input' required />
          </label>
          <label htmlFor='' className='auth-form__label'>
            Пароль
            <input type='password' name='user-password' className='auth-form__input' required />
          </label>
        </AuthForm>
      </Container>
    </main>
  )
}

export default Login;