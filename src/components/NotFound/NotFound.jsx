import { useNavigate } from 'react-router-dom';
import './NotFound.css';

const NotFound = () => {
  const navigate = useNavigate();
  const goBack = () => navigate(-1);

  const handleGoBackClick = (evt) => {
    evt.preventDefault();
    goBack();
  }

  return (
    <main>
      <section className='not-found'>
        <h1 className='not-found__title'>404</h1>
        <p className='not-found__subtitle'>Страница не найдена</p>
        <button onClick={handleGoBackClick} className='not-found__link'>
          Назад
        </button>
      </section>
    </main>
  );
};

export default NotFound;