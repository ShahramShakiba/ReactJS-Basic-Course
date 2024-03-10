import Modal from '../UI/Modal';
import classes from './Cart.module.css';

export default function Cart({ onHideCart }) {
  const cartItems = (
    <ul className={classes['cart-items']}>
      {[{ id: 'c1', name: 'Sushi', amount: 2, price: 12.99 }].map((item) => (
        <li>{item.name}</li>
      ))}
    </ul>
  );

  return (
    <Modal onHide={onHideCart}>
      {cartItems}

      <div className={classes.total}>
        <span> Total Amount </span>
        <span> 35.62 </span>
      </div>

      <div className={classes.actions}>
        <button onClick={onHideCart} className={classes['button--alt']}>
          Close
        </button>
        <button className={classes.button}> Order </button>
      </div>
    </Modal>
  );
}
