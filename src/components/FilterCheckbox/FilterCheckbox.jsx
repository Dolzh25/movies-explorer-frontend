import './FilterCheckbox.css';

const FilterCheckbox = ({ text, id, onCheckboxChange, isCheckbox }) => {
  return (
    <label className='filter-checkbox'>
      {text}
      <input
        className='filter-checkbox__input'
        type='checkbox'
        name={id}
        id={id}
        onChange={onCheckboxChange}
        defaultChecked={isCheckbox}
      />
      <span className={`filter-checkbox__indicator ${isCheckbox ? 'filter-checkbox__indicator_checked' : ''}`}></span>
    </label>
  )
}

export default FilterCheckbox;