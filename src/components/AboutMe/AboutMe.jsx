import Container from '../Container/Container';
import SectionHeader from '../SectionHeader/SectionHeader';
import './AboutMe.css';
import photoPath from '../../images/photo.jpg';

const AboutMe = () => {
  return (
    <section className='about-me'>
      <Container>
        <SectionHeader title='Студент' />

        <div className='about-me__content'>
          <div className='about-me__content-info'>
            <p className='about-me__title'>Виталий</p>
            <p className='about-me__subtitle'>Фронтенд-разработчик, 30 лет</p>
            <p className='about-me__description'>Я&nbsp;родился и&nbsp;живу в&nbsp;Саратове, закончил факультет экономики СГУ. У&nbsp;меня есть жена и&nbsp;дочь. Я&nbsp;люблю слушать музыку, а&nbsp;ещё увлекаюсь бегом. Недавно начал кодить. С&nbsp;2015 года работал в&nbsp;компании &laquo;СКБ Контур&raquo;. После того, как прошёл курс по веб&#8209;разработке, начал заниматься фриланс&#8209;заказами и&nbsp;ушёл с&nbsp;постоянной работы.</p>

            <ul className='about-me__socials'>
              <li className='about-me__item'>
                <a href='#1' className='about-me__link' target='_blank'>Facebook</a>
              </li>
              <li className='about-me__item'>
                <a href='#2' className='about-me__link' target='_blank'>Github</a>
              </li>
            </ul>
          </div>
          <div className='about-me__image-wrapper'>
            <img src={photoPath} alt='Виталий' className='about-me__image' />
          </div>
        </div>

      </Container>
    </section>
  )
}

export default AboutMe;