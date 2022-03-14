import { useState } from 'react';
import './MovieCard.css';

const MovieCard = ({ movie }) => {
  const { image, nameRU, duration, trailerLink } = movie;
  const [isLike, setIsLike] = useState(false);

  const handleClick = () => {
    setIsLike(!isLike);
  }

  const formatTime = (duration) => {
    if (duration >= 60) {
      return `${Math.round(duration / 60)}ч ${duration % 60}м`
    }
    return `0ч ${duration % 60}м`;
  }

  return (
    <li className='movie-card'>
      <img className='movie-card__image' src={image} alt={nameRU} />
      <div className='movie-card__row'>
        <a href={trailerLink} className='movie-card__title' target='_blank' rel='noreferrer'>{nameRU}</a>
        <button className={isLike ? 'movie-card__action movie-card__action_like movie-card__action_like-active' : 'movie-card__action movie-card__action_like'} onClick={handleClick}>
          <svg width='10' height='9' viewBox='0 0 10 9' fill='currentColor' xmlns='http://www.w3.org/2000/svg'>
            <path d='M7.27273 0C6.27273 0 5.54545 0.523077 5 1.08974C4.45455 0.566667 3.72727 0 2.72727 0C1.13636 0 0 1.2641 0 2.83333C0 3.61795 0.318182 4.31538 0.909091 4.79487L5 8.5L9.09091 4.79487C9.63636 4.27179 10 3.61795 10 2.83333C10 1.2641 8.86364 0 7.27273 0Z' />
          </svg>
        </button>
      </div>
      <div className='movie-card__meta'>
        <p className='movie-card__duration'>{formatTime(duration)}</p>
      </div>
    </li>
  )
}

export default MovieCard;
