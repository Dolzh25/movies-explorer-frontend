import './BurgerButton.css';
import burgerIconPath from '../../images/burger.svg';
import crossIconPath from '../../images/cross.svg';

const BurgerButton = ({ opened, handleToggleMenu }) => {
  return (
    <button className="main-navigation__toggle burger-button" type="button" aria-label="Открыть меню" onClick={handleToggleMenu}>
      {opened ?
        <img src={crossIconPath} alt="" />
        :
        <img src={burgerIconPath} alt="" />
      }
    </button>
  )
}

export default BurgerButton;
