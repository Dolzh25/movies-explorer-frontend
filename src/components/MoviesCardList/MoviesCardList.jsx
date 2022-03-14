import MovieCard from '../MovieCard/MovieCard';
import './MoviesCardList.css';
import { data } from '../../utils/mock/mock';

const MoviesCardList = () => {
  return (
    <section className='movies-cards'>
      <ul className='movies-card-list'>
        {data.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
      </ul>
      <div className="movies-cards__controls">
        <button className="movies-cards__load-more">Ещё</button>
      </div>
    </section>
  )
}

export default MoviesCardList;