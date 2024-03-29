import mealsImg from '../../assets/meals.jpg';
import classes from './Header.module.css';
import HeaderCartBtn from './HeaderCartBtn';

export default function Header({ onShowCart }) {
  return (
    <>
      <header className={classes.header}>
        <h1> Meals </h1>
        <HeaderCartBtn onShow={onShowCart} />
      </header>

      <div className={classes['main-image']}>
        <img src={mealsImg} alt="A table full of delicious food." />
      </div>
    </>
  );
}
