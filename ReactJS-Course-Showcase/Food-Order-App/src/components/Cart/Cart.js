import { useContext } from 'react';
import Modal from '../UI/Modal';
import classes from './Cart.module.css';
import cartContext from '../../context/cart-context';
import CartItem from './CartItem';

export default function Cart({ onHideCart }) {
  const cartCtx = useContext(cartContext);

  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;

  const cartItemRemoveHandler = (id) => {};

  const cartItemAddHandler = (item) => {};

  const cartItems = (
    <ul className={classes['cart-items']}>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          amount={item.amount}
          name={item.name}
          price={item.price}
          onAdd={cartItemAddHandler.bind(null, item)}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
        />
      ))}
    </ul>
  );

  return (
    <Modal onHide={onHideCart}>
      {cartItems}

      <div className={classes.total}>
        <span> Total Amount </span>
        <span> {totalAmount} </span>
      </div>

      <div className={classes.actions}>
        <button onClick={onHideCart} className={classes['button--alt']}>
          Close
        </button>
        {hasItems && <button className={classes.button}> Order </button>}
      </div>
    </Modal>
  );
}

/* onAdd={cartItemAddHandler.bind(null, item)}
 - bind() : is used to create a new function that has the this keyword of the object bound to it
 
 - pre-configure a function for future execution and basically allows you to pre-configure the argument that function will receive when it's being executed.

 - that's something we need here to ensure that both these functions do receive the "id" and or the "item" respectively
*/
