import { useContext } from 'react';
import classes from './MealItem.module.css';
import MealItemForm from './MealItemForm';
import cartContext from '../../../context/cart-context';

export default function MealItem({ name, description, price, id }) {
  const cartCtx = useContext(cartContext);

  const formattedPrice = `$${price.toFixed(2)}`;

  const addToCartHandler = (amount) => {
    cartCtx.addItem({
      id: id,
      name: name,
      amount: amount,
      price: price,
    });
  };

  return (
    <li className={classes.meal}>
      <div>
        <h3> {name} </h3>
        <div className={classes.description}> {description} </div>
        <div className={classes.price}> {formattedPrice} </div>
      </div>

      <div>
        <MealItemForm onAddToCart={addToCartHandler} />
      </div>
    </li>
  );
}
