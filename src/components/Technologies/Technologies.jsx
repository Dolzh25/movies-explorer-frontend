import './Technologies.css';
import SectionHeader from '../SectionHeader/SectionHeader';

const Technologies = () => {
  return (
    <section className="technologies" id="technologies">
      <div className="technologies__wrapper">
        <SectionHeader className="technologies__header" title="Технологии" />
        <div className="technologies__content">
          <h2 className="technologies__title">7 технологий</h2>
          <p className="technologies__description">На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
          <ul className="technologies__list">
            <li className="technologies__list-item">HTML</li>
            <li className="technologies__list-item">CSS</li>
            <li className="technologies__list-item">JS</li>
            <li className="technologies__list-item">React</li>
            <li className="technologies__list-item">Git</li>
            <li className="technologies__list-item">Express.js</li>
            <li className="technologies__list-item">mongoDB</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Technologies;