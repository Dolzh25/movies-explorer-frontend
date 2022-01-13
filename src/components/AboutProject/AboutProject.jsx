import './AboutProject.css';
import SectionHeader from '../SectionHeader/SectionHeader';
import Infographics from '../Infographics/Infographics';

const AboutProject = () => {
  return (
    <section className="about-project" id="about-project">
      <SectionHeader className="about-project__header" title="О проекте" />
      <div className="about-project__columns">
        <div className="about-project__column">
          <h3 className="about-project__title">Дипломный проект включал 5 этапов</h3>
          <p className="about-project__description">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
        </div>
        <div className="about-project__column">
          <h3 className="about-project__title">На выполнение диплома ушло 5 недель</h3>
          <p className="about-project__description">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
        </div>
      </div>
      <Infographics />
    </section>
  );
};

export default AboutProject;