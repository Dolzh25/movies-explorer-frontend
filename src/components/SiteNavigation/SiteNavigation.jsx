import { NavLink } from 'react-router-dom';
import './SiteNavigation.css';

const SiteNavigation = () => {
  let classNames = 'site-navigation__link';
  let activeClassName = "site-navigation__link site-navigation__link_accent"

  return (
    <ul className="site-navigation">
      <li className="site-navigation__item site-navigation__item_mobile-only">
        <NavLink to="/" className={({ isActive }) =>
          isActive ? activeClassName : classNames
        }>Главная</NavLink>
      </li>
      <li className="site-navigation__item">
        <NavLink to="/movies"
          className={({ isActive }) =>
            isActive ? activeClassName : classNames
          }
        >Фильмы</NavLink>
      </li>
      <li className="site-navigation__item">
        <NavLink to="/saved-movies" className={({ isActive }) =>
          isActive ? activeClassName : classNames
        }>Сохранённые фильмы</NavLink>
      </li>
    </ul>
  )
}

export default SiteNavigation;
