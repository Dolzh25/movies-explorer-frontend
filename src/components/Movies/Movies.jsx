import './Movies.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import SearchForm from '../SearchForm/SearchForm';
import MovieCardList from '../MoviesCardList/MoviesCardList';
import movies from '../../mock/mock';

const Movies = ({ isLoginIn }) => {
  return (
    <>
      <Header isLoginIn={isLoginIn} />
      <main>
        <h1 className='visually-hidden'>Страница поиска фильмов</h1>
        <div className='movies'>
          <section className='movies__search'>
            <h2 className='visually-hidden'>Поиск фильмов</h2>
            <SearchForm />
          </section>
          <section className='movies__list'>
            <h2 className='visually-hidden'>Список фильмов</h2>
            <MovieCardList list={movies} />
            <div className="movies__list-controlls">
              <button className='movies__show-more'>Ещё</button>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  )
}

export default Movies;
