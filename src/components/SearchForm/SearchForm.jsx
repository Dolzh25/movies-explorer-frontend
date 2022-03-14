import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import './SearchForm.css';

const SearchForm = () => {
  return (
    <section className='search'>
      <form action="#" className="search-form">
        <label className='search-form__field'>
          <input className='search-form__input' type="text" name='search' placeholder='Фильм' />
        </label>
        <button className='search-form__submit' type='submit' aria-label='Найти'></button>
      </form>
      <FilterCheckbox />
    </section>
  )
}

export default SearchForm;
