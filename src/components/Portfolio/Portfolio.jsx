import Container from '../Container/Container';
import './Portfolio.css';

const Portfolio = () => {
  return (
    <section className='portfolio'>
      <Container>
        <h3 className='portfolio__title'>Портфолио</h3>
        <ul className='portfolio__list'>
          <li className='portfolio__item'>
            <a href='https://dolzh25.github.io/second-project/' className='portfolio__link' target='_blank' rel='noreferrer'>
              Статичный сайт
              <svg width='18' height='17' viewBox='0 0 18 17' fill='none' xmlns='http://www.w3.org/2000/svg'>
                <path d='M2.60653 16.5241L14.9645 4.14489L14.9432 13.6903H17.2656V0.181818H3.77841L3.7571 2.48295H13.3026L0.944603 14.8622L2.60653 16.5241Z' fill='black' />
              </svg>
            </a>
          </li>
          <li className='portfolio__item'>
            <a href='https://dolzh25.github.io/russian-travel' className='portfolio__link' target='_blank' rel='noreferrer'>
              Адаптивный сайт
              <svg width='18' height='17' viewBox='0 0 18 17' fill='none' xmlns='http://www.w3.org/2000/svg'>
                <path d='M2.60653 16.5241L14.9645 4.14489L14.9432 13.6903H17.2656V0.181818H3.77841L3.7571 2.48295H13.3026L0.944603 14.8622L2.60653 16.5241Z' fill='black' />
              </svg>
            </a>
          </li>
          <li className='portfolio__item'>
            <a href='https://dolzh.nomoredomains.rocks' className='portfolio__link' target='_blank' rel='noreferrer'>
              Одностраничное приложение
              <svg width='18' height='17' viewBox='0 0 18 17' fill='none' xmlns='http://www.w3.org/2000/svg'>
                <path d='M2.60653 16.5241L14.9645 4.14489L14.9432 13.6903H17.2656V0.181818H3.77841L3.7571 2.48295H13.3026L0.944603 14.8622L2.60653 16.5241Z' fill='black' />
              </svg>
            </a>
          </li>
        </ul>
      </Container>
    </section>
  )
}

export default Portfolio;