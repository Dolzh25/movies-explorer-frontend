import './SectionHeader.css';

const SectionHeader = ({ className, title }) => {
  const classesHeader = ['section-header'];
  if (className) {
    classesHeader.push(className)
  }
  const classes = classesHeader.join(' ')
  return (
    <header className={classes}>
      <h2 className="section-header__title">{title}</h2>
    </header>
  );
};

export default SectionHeader;