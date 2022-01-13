import './SearchForm.css';
import iconPath from '../../images/arrow-right.svg';
import { useState } from 'react';

const SearchForm = () => {
  const [isChecked, setIsChecked] = useState(true);

  const handleToggleCheckbox = () => {
    setIsChecked(!isChecked);
  }

  const handleSubmit = (evt) => {
    evt.preventDefault();
  }

  return (
    <form className='search-form' action='#' method='POST' onSubmit={handleSubmit}>
      <div className='search-form__field'>
        <label className='visually-hidden' htmlFor="search-form__input">Поиск</label>
        <input type="text" name='search' className='search-form__input' id='search-form__input' placeholder='Фильм' />

        <button className='search-form__submit' type='submit'>
          <img src={iconPath} alt="" />
        </button>
      </div>
      <label className='search-form__checkbox'>
        Короткометражки
        <input
          className='visually-hidden'
          name='toggle' type="checkbox"
          onChange={handleToggleCheckbox}
          checked={isChecked}
        />
        <span className='search-form__checkbox-indicator'></span>
      </label>
    </form>
  )
}

export default SearchForm;