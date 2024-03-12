import { useContext, useEffect, useState } from 'react';
import CartIcon from '../Cart/CartIcon';
import classes from './HeaderCartBtn.module.css';
import cartContext from '../../context/cart-context';

export default function HeaderCartBtn({ onShow }) {
  const [highlightBtn, setHighlightBtn] = useState(false);
  const cartCtx = useContext(cartContext);

  const { items } = cartCtx;
  const numberOfCartItems = items.reduce((curr, item) => {
    return curr + item.amount;
  }, 0);

  const btnClasses = `${classes.button} ${highlightBtn ? classes.bump : ''}`;

  useEffect(() => {
    if (items.length === 0) {
      return;
    }

    setHighlightBtn(true);

    // to repeat the bump css class
    const timer = setTimeout(() => {
      setHighlightBtn(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [items]);

  return (
    <button onClick={onShow} className={btnClasses}>
      <span className={classes.icon}>
        <CartIcon />
      </span>

      <span> Your Cart </span>

      <span className={classes.badge}> {numberOfCartItems} </span>
    </button>
  );
}

/* reduce()
- is a method that reduces the array to a single value. 
- to add 1 item to the cart but for example set the amount for that item to 3 -
  show 1 on the cart but we have 3 item in the cart
*/
