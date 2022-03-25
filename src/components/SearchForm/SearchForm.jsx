import './SearchForm.css';
import { useEffect, useState } from 'react';

import { useFormWithValidation } from '../../hooks/useFormWithValidation';
import { searchVoidMessage } from '../../utils/constants';

import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

const SearchForm = ({ searchMovies, searchValue }) => {
  const { values, handleChange, resetForm } = useFormWithValidation();

  const [voidMessage, setVoidMessage] = useState('');
  const [isCheckbox, setIsCheckbox] = useState(searchValue?.isCheckbox);

  const handleCheckboxChange = () => {
    setIsCheckbox(!isCheckbox);
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();

    if (values.movieSearch) {
      searchMovies(values.movieSearch, isCheckbox);
      setVoidMessage('');
    } else {
      setVoidMessage(searchVoidMessage);
    }
    return;
  };

  useEffect(() => {
    resetForm({
      movieSearch: searchValue.keyword
    })
  }, [searchValue]);

  return (
    <section className='search'>
      <form className='search-form' onSubmit={handleSubmit} >
        <label className='search-form__field'>
          <input
            className='search-form__input'
            type='text'
            name='movieSearch'
            id='movieSearch'
            value={values.movieSearch || ''}
            onChange={handleChange}
            placeholder='Фильм'
          />
        </label>
        <span className='search-form__error'>{voidMessage}</span>
        <button className='search-form__submit' type='submit' aria-label='Найти'></button>
      </form>
      <FilterCheckbox
        text='Короткометражки'
        id='switchShortMovie'
        onCheckboxChange={handleCheckboxChange}
        isCheckbox={isCheckbox}
      />
    </section>
  )
}

export default SearchForm;
