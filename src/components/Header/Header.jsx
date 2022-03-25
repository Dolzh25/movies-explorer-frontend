import Container from '../Container/Container';
import './Header.css';
import logoPath from '../../images/logo.svg';
import AuthNav from '../AuthNav/AuthNav';
import Navigation from '../Navigation/Navigation';
import { Link } from 'react-router-dom';

const Header = ({ isLoggedIn }) => {
  return (
    <header className='header'>
      <Container>
        <div className='header__wrapper'>
          <Link to='/' className='header__logo'>
            <img src={logoPath} alt='Logo' />
          </Link>
          {isLoggedIn ?
            <Navigation /> :
            <AuthNav />
          }
        </div>
      </Container>
    </header>
  )
}

export default Header;