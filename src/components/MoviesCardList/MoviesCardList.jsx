import { useEffect, useState } from 'react';
import './MoviesCardList.css';

import MovieCard from '../MovieCard/MovieCard';
import Preloader from '../Preloader/Preloader';
import LoadMore from '../LoadMore/LoadMore';

import { renderCountMovies, showedCardsCount } from '../../utils/constants';

const MoviesCardList = (props) => {
  const { listType, isLoading, movies, saveMovie, removeMovie, savedMoviesIds } = props;

  const [displayedMoviesNum, setDisplayedMoviesNum] = useState(0);
  const [displayedMoreMoviesNum, setDisplayedMoreMoviesNum] = useState(0);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleMoreClick = () => {
    setDisplayedMoviesNum(displayedMoviesNum + displayedMoreMoviesNum);
  };

  const updateWindowWidth = () => {
    setTimeout(() => setWindowWidth(window.innerWidth), 2000);
  };

  useEffect(() => {
    window.addEventListener('resize', updateWindowWidth);

    if (windowWidth >= 890) {
      setDisplayedMoviesNum(showedCardsCount.sizeXL);
      setDisplayedMoreMoviesNum(renderCountMovies.sizeXL);
    } else if (windowWidth >= 480) {
      setDisplayedMoviesNum(showedCardsCount.sizeL);
      setDisplayedMoreMoviesNum(renderCountMovies.sizeS);
    } else {
      setDisplayedMoviesNum(showedCardsCount.sizeS);
      setDisplayedMoreMoviesNum(renderCountMovies.sizeS);
    }

    return () => window.removeEventListener('resize', updateWindowWidth);
  }, [windowWidth]);

  return (
    <section className='movies-cards'>
      {!isLoading && movies.length === 0 &&
        <p>Ничего не найдено</p>
      }
      {isLoading ?
        <Preloader /> :
        <ul className='movies-card-list'>

          {movies.reduce((moviesToRender, movie) => {
            moviesToRender.length < displayedMoviesNum &&
              moviesToRender.push(
                <MovieCard
                  key={movie.movieId}
                  movie={movie}
                  savedMoviesIds={savedMoviesIds}
                  saveMovie={saveMovie}
                  removeMovie={removeMovie}
                  listType={listType}
                />
              );
            return moviesToRender;
          }, [])}
        </ul>
      }
      {!isLoading && movies.length > displayedMoviesNum &&
        <LoadMore onHandleClick={handleMoreClick} />
      }
    </section>
  )
}

export default MoviesCardList;