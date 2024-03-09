import CartIcon from '../Cart/CartIcon';
import classes from './HeaderCartBtn.module.css';

export default function HeaderCartBtn({ children }) {
  return (
    <button className={classes.button}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span> Your Cart </span>
      <span className={classes.badge}> 3 </span>
    </button>
  );
}
