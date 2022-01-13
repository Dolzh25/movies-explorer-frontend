import './Footer.css';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__top">
        <p className="footer__text">Учебный проект Яндекс.Практикум х BeatFilm.</p>
      </div>
      <div className="footer__bottom">
        <span className="footer__year">&copy; {` ${year}`}</span>
        <ul className="footer__list">
          <li className="footer__list-item">
            <a href="#1" className="footer__list-link">Яндекс.Практикум</a>
          </li>
          <li className="footer__list-item">
            <a href="#2" className="footer__list-link">Github</a>
          </li>
          <li className="footer__list-item">
            <a href="#3" className="footer__list-link">Facebook</a>
          </li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer;
