import Container from '../Container/Container';
import './Footer.css';

const Footer = () => {
  const getCurrentYear = () => {
    return new Date().getFullYear();
  }

  return (
    <footer className='footer'>
      <Container>
        <p className='footer__title'>Учебный проект Яндекс.Практикум х BeatFilm.</p>
        <div className='footer__content'>
          <p className='footer__copyrigth'>&copy; {getCurrentYear()}</p>
          <ul className='footer__nav'>
            <li className='footer__nav-item'>
              <a href='#1' className='footer__nav-link'>Яндекс.Практикум</a>
            </li>
            <li className='footer__nav-item'>
              <a href='#1' className='footer__nav-link'>Github</a>
            </li>
            <li className='footer__nav-item'>
              <a href='#1' className='footer__nav-link'>Facebook</a>
            </li>
          </ul>
        </div>
      </Container>
    </footer>
  )
}

export default Footer;