import { Link } from 'react-router-dom';
import './Authorization.css';

const Authorization = () => {
  return (
    <ul className="authorization">
      <li className="authorization__item">
        <Link to="signup" className="authorization__link">Регистрация</Link>
      </li>
      <li className="authorization__item">
        <Link to="signin" className="authorization__link button button_theme_green button_size_small">Войти</Link>
      </li>
    </ul>
  )
}

export default Authorization;