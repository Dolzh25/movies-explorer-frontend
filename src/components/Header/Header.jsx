import './Header.css';
import Navigation from '../Navigation/Navigation';

const Header = ({ isLoginIn }) => {
  return (
    <header className="header">
      <Navigation isLoginIn={isLoginIn} />
    </header>
  )
}

export default Header;
