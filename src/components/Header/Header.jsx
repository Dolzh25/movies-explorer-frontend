import Container from '../Container/Container';
import './Header.css';
import logoPath from '../../images/logo.svg';
import AuthNav from '../AuthNav/AuthNav';
import Navigation from '../Navigation/Navigation';

const Header = ({ loggedIn }) => {
  return (
    <header className='header'>
      <Container>
        <div className='header__wrapper'>
          <a href='/' className='header__logo'>
            <img src={logoPath} alt='Logo' />
          </a>
          {loggedIn ?
            <Navigation /> :
            <AuthNav />
          }
        </div>
      </Container>
    </header>
  )
}

export default Header;