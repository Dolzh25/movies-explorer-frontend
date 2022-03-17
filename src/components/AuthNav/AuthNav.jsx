import { Link } from 'react-router-dom';
import './AuthNav.css';

const AuthNav = () => {
  return (
    <ul className='auth-nav'>
      <li className='auth-nav__item'>
        <Link to='/signup' className='auth-nav__link'>Регистрация</Link>
      </li>
      <li className='auth-nav__item'>
        <Link to='/signin' className='auth-nav__link auth-nav__link_login'>Войти</Link>
      </li>
    </ul>
  )
}

export default AuthNav;
