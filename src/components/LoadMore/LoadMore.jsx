import './LoadMore.css';

const LoadMore = ({ onHandleClick }) => {
  const handleMoreClick = () => {
    onHandleClick();
  }
  return (
    <div className='load-more'>
      <button className='load-more__button' onClick={handleMoreClick}>Ещё</button>
    </div>
  )
}

export default LoadMore;