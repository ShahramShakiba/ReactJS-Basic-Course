import { useRef, useState } from 'react';
import Input from '../../UI/Input';
import classes from './MealItemForm.module.css';

export default function MealItemForm({ onAddToCart }) {
  const amountInputRef = useRef();
  const [amountIsValid, setAmountIsValid] = useState(true);

  const submitHandler = (e) => {
    e.preventDefault();

    const enteredAmount = +amountInputRef.current.value;
    if (
      enteredAmount.length === 0 ||
      enteredAmount < 1 ||
      enteredAmount > 10
    ) {
      setAmountIsValid(false);
      return;
    }

    onAddToCart(enteredAmount);
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        ref={amountInputRef}
        label="Amount"
        input={{
          id: 'amount',
          type: 'number',
          min: '1',
          max: '10',
          step: '1',
          defaultValue: '1',
        }}
      />

      <button> Add Meal </button>

      {!amountIsValid && <p> Please Enter a Valid Amount (1-10) </p>}
    </form>
  );
}

/* onAddToCart(enteredAmount);
  - the "cart item" we need to add needs more data than just the entered amount

  - in this MealItemForm we only have that amount

  - we don not have the "id" or a "name" or a "price" of that item

  * that's why we are not calling the "context" method here and that's why we are calling other function (onAddToCart) to pass the entered and validated amount number | we define the onAddToCart in "MealItem"

*/
