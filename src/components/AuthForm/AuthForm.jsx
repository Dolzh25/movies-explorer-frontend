import './AuthForm.css';
import logoPath from '../../images/logo.svg';
import { Link } from 'react-router-dom';

const AuthForm = ({ children, title, submitText, formName, textLink, text, pathLink }) => {
  return (
    <section className='auth-form'>
      <Link to='/' className='auth-form__logo'>
        <img src={logoPath} alt='Logo' />
      </Link>

      <h1 className='auth-form__title'>{title}</h1>

      <form
        name={`form-${formName}`}
        id={`form-${formName}`}
        className='auth-form__form'
      >
        <fieldset className='auth-form__group'>
          {children}
        </fieldset>
        <button className='auth-form__submit' type='submit'>{submitText}</button>
      </form>
      <p className='auth-form__text'>{text}{' '}<a className='auth-form__link' href={pathLink}>{textLink}</a></p>
    </section>
  )
}

export default AuthForm;