import './SectionHeader.css';

const SectionHeader = ({ title }) => {
  return (
    <header className='section-header'>
      <h2 className='section-header__title'>{title}</h2>
    </header>
  )
}

export default SectionHeader;