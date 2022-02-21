import './AuthNav.css';

const AuthNav = () => {
  return (
    <ul className='auth-nav'>
      <li className='auth-nav__item'>
        <a href='#1' className='auth-nav__link'>Регистрация</a>
      </li>
      <li className='auth-nav__item'>
        <a href='#1' className='auth-nav__link auth-nav__link_login'>Войти</a>
      </li>
    </ul>
  )
}

export default AuthNav;
