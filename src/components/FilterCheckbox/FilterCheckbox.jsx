import { useState } from 'react';
import './FilterCheckbox.css';

const FilterCheckbox = () => {
  const [checked, setChecked] = useState(false);

  const handleInputClick = () => {
    setChecked(!checked);
  }

  return (
    <label className='filter-checkbox'>
      Короткометражки
      <input className='filter-checkbox__input' type='checkbox' name='shorts' onChange={handleInputClick} checked={checked} />
      <span className={checked ? 'filter-checkbox__indicator filter-checkbox__indicator_checked' : 'filter-checkbox__indicator'}></span>
    </label>
  )
}

export default FilterCheckbox;