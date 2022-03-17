import './AboutProject.css';
import SectionHeader from '../SectionHeader/SectionHeader';
import Container from '../Container/Container';

const AboutProject = () => {
  return (
    <section className='about-project'>
      <Container>
        <SectionHeader title='О проекте' />
        <div className='about-project__content'>
          <div className='about-project__column'>
            <p className='about-project__title'>Дипломный проект включал 5 этапов</p>
            <p className='about-project__text'>Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
          </div>
          <div className='about-project__column'>
            <p className='about-project__title'>На выполнение диплома ушло 5 недель</p>
            <p className='about-project__text'>У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
          </div>
        </div>
        <div className='about-project__stats'>
          <div className='about-project__bar about-project__bar_backend'>
            <span className='about-project__bar-duration'>1 неделя</span>
            <span className='about-project__bar-technology'>Back-end</span>
          </div>
          <div className='about-project__bar about-project__bar_frontend'>
            <span className='about-project__bar-duration'>4 недели</span>
            <span className='about-project__bar-technology'>Front-end</span>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default AboutProject;