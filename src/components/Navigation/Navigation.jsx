import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import './Navigation.css';

const Navigation = () => {
  const [opened, setOpened] = useState(false);

  const handleToggleClick = () => {
    setOpened(!opened);
  }

  return (
    <nav className='navigation navigation_opened'>
      <button
        className={opened ? 'navigation__toggle navigation__toggle_opened' : 'navigation__toggle'}
        aria-label='Показать меню'
        onClick={handleToggleClick}
      ></button>
      <div className={opened ? 'navigation__wrapper navigation__wrapper_opened' : 'navigation__wrapper'}>
        <div className='navigation__content'>
          <ul className='navigation__menu'>
            <li className='navigation__item'>
              <NavLink to='/' className={({ isActive }) => isActive ? 'navigation__link navigation__link_active' : 'navigation__link'}>Главная</NavLink>
            </li>
            <li className='navigation__item'>
              <NavLink to='/movies' className={({ isActive }) => isActive ? 'navigation__link navigation__link_active' : 'navigation__link'}>Фильмы</NavLink>
            </li>
            <li className='navigation__item'>
              <NavLink to='/saved-movies' className={({ isActive }) => isActive ? 'navigation__link navigation__link_active' : 'navigation__link'}>Сохранённые фильмы</NavLink>
            </li>
          </ul>
          <Link to='/profile' className='navigation__user'>Аккаунт</Link>
        </div>
      </div>
    </nav>
  )
}

export default Navigation;