import { Link, useNavigate } from 'react-router-dom';
import './NotFoundPage.css';

const NotFoundPage = () => {
  const navigate = useNavigate();

  const goBack = (evt) => {
    evt.preventDefault();
    navigate(-1)
  }

  return (
    <section className='not-found'>
      <h1 className='not-found__title'><span className='not-found__code'>404</span>Страница не найдена</h1>
      <Link className='not-found__back' to="" onClick={goBack}>Назад</Link>
    </section>
  )
}

export default NotFoundPage;
