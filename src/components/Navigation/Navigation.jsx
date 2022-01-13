import './Navigation.css';
import logoPath from '../../images/logo.svg';
import Authorization from '../Authorization/Authorization';
import MainNavigation from '../MainNavigation/MainNavigation';
import { Link } from 'react-router-dom';

const Navigation = ({ isLoginIn }) => {

  return (
    <nav className="navigation">
      <div className="navigation__logo">
        <Link to="/">
          <img src={logoPath} alt="logo" />
        </Link>
      </div>

      {isLoginIn ? <MainNavigation /> : <Authorization />}
    </nav>
  )
}

export default Navigation;
