import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import './SearchForm.css';
import { useFormWithValidation } from '../../hooks/useFormWithValidation';
// import { moviesApi } from '../../utils/MoviesApi';
import { useState } from 'react';

const SearchForm = ({ searchMovies }) => {
  const { values, handleChange } = useFormWithValidation();
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (evt) => {
    evt.preventDefault();

    if (values.search) {
      searchMovies()
      // moviesApi()
      // .then((movies) => {
      //   localStorage.setItem('movies', movies);
      // })
      setErrorMessage('');
    } else {
      setErrorMessage('Нужно ввести ключевое слово');
    }
  }

  const handleFormChange = () => {
    setErrorMessage('');
  }

  return (
    <section className='search'>
      <form className='search-form' onSubmit={handleSubmit} onChange={handleFormChange}>
        <label className='search-form__field'>
          <input className='search-form__input' type='text' name='search' onChange={handleChange} placeholder='Фильм' required />
        </label>
        <span className='search-form__error'>{errorMessage}</span>
        <button className='search-form__submit' type='submit' aria-label='Найти'></button>
      </form>
      <FilterCheckbox />
    </section>
  )
}

export default SearchForm;
