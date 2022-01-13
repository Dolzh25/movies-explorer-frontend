import './MainNavigation.css';
import userLogoPath from '../../images/user.svg';
import { useState } from 'react';
import BurgerButton from '../BurgerButton/BurgerButton';
import SiteNavigation from '../SiteNavigation/SiteNavigation';
import { Link } from 'react-router-dom';

const MainNavigation = () => {

  const [opened, setOpened] = useState(false);
  const handleToggleMenu = () => {
    setOpened(!opened);
  }

  return (
    <div className={`${opened ? 'main-navigation main-navigation_opened' : 'main-navigation'}`}>

      <div className={`${opened ? 'main-navigation__wrapper main-navigation__wrapper_opened' : 'main-navigation__wrapper'}`}>
        <SiteNavigation />

        <Link to="/profile" className="main-navigation__user">
          Аккаунт
          <img src={userLogoPath} alt="user" />
        </Link>
      </div>

      <BurgerButton opened={opened} handleToggleMenu={handleToggleMenu} />
    </div>
  )
}

export default MainNavigation;
