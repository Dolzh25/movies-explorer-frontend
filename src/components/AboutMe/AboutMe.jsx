import './AboutMe.css';
import SectionHeader from '../SectionHeader/SectionHeader';
import photoPath from '../../images/photo.jpg';

const AboutMe = () => {
  return (
    <section className="about-me" id="about-me">
      <SectionHeader className="about-me__headline" title="Студент" />
      <div className="about-me__content">
        <div className="about-me__column">
          <p className="about-me__name">Евгений</p>
          <p className="about-me__position">Фронтенд-разработчик, 30 лет</p>
          <p className="about-me__description">Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена
            и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ Контур». После того, как прошёл курс по веб-разработке, начал заниматься фриланс-заказами и ушёл с постоянной работы.</p>
          <ul className="about-me__social">
            <li className="about-me__social-item">
              <a href="#1" className="about-me__social-link">Facebook</a>
            </li>
            <li className="about-me__social-item">
              <a href="#1" className="about-me__social-link">Github</a>
            </li>
          </ul>
        </div>
        <div className="about-me__column">
          <img className="about-me__image" src={photoPath} alt="Евгений Долженков" />
        </div>
      </div>
      <div className="about-me__portfolio portfolio">
        <h3 className="portfolio__title">Портфолио</h3>
        <ul className="portfolio__list">
          <li className="portfolio__item">
            <a href="#1" className="portfolio__link">
              Статичный сайт
              <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2.60653 16.5241L14.9645 4.14489L14.9432 13.6903H17.2656V0.181818H3.77841L3.7571 2.48295H13.3026L0.944603 14.8622L2.60653 16.5241Z" fill="black" />
              </svg>
            </a>
          </li>
          <li className="portfolio__item">
            <a href="#1" className="portfolio__link">
              Адаптивный сайт
              <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2.60653 16.5241L14.9645 4.14489L14.9432 13.6903H17.2656V0.181818H3.77841L3.7571 2.48295H13.3026L0.944603 14.8622L2.60653 16.5241Z" fill="black" />
              </svg>
            </a>
          </li>
          <li className="portfolio__item">
            <a href="#1" className="portfolio__link">
              Одностраничное приложение
              <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2.60653 16.5241L14.9645 4.14489L14.9432 13.6903H17.2656V0.181818H3.77841L3.7571 2.48295H13.3026L0.944603 14.8622L2.60653 16.5241Z" fill="black" />
              </svg>
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default AboutMe;