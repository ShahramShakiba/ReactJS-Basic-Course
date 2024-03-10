import { useContext } from 'react';
import CartIcon from '../Cart/CartIcon';
import classes from './HeaderCartBtn.module.css';
import cartContext from '../../context/cart-context';

export default function HeaderCartBtn({ onShow }) {
  const cartCtx = useContext(cartContext);
  const numberOfCartItems = cartCtx.items.reduce((curr, item) => {
    return curr + item.amount;
  }, 0);

  return (
    <button onClick={onShow} className={classes.button}>
      <span className={classes.icon}>
        <CartIcon />
      </span>

      <span> Your Cart </span>

      <span className={classes.badge}> {numberOfCartItems} </span>
    </button>
  );
}
