import MovieCard from '../MovieCard/MovieCard';
import './MoviesCardList.css';

const MovieCardList = ({ list }) => {
  return (
    <ul className='movies-card-list'>
      {list.map((movie) => {
        return (
          <li>
            <MovieCard key={movie.id} movie={movie} />
          </li>
        )
      })}
    </ul>
  )
}

export default MovieCardList;