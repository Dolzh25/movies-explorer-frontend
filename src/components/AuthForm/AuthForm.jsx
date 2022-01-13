import './AuthForm.css';

const AuthForm = ({ children, name, buttonText }) => {
  return (
    <form action="#" method='POST' className="auth-form" name={name}>
      {children}
      <button className='auth-form__submit button' type="submit">{buttonText}</button>
    </form>
  )
}

export default AuthForm;