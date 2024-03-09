import mealsImg from '../../assets/meals.jpg';
import classes from './Header.module.css';

export default function Header({ children }) {
  return (
    <>
      <header className={classes.header}>
        <h1> Meals </h1>
        <button> Cart </button>
      </header>

      <div className={classes['main-image']}>
        <img src={mealsImg} alt="A table full of delicious food." />
      </div>
    </>
  );
}
