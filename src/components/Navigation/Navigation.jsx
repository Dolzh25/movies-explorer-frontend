import { useState } from 'react';
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
              <a href='#1' className='navigation__link'>Главная</a>
            </li>
            <li className='navigation__item'>
              <a href='#1' className='navigation__link navigation__link_active'>Фильмы</a>
            </li>
            <li className='navigation__item'>
              <a href='#1' className='navigation__link'>Сохранённые фильмы</a>
            </li>
          </ul>
          <a href='#1' className='navigation__user'>Аккаунт</a>
        </div>
      </div>
    </nav>
  )
}

export default Navigation;