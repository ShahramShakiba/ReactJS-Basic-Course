import Input from '../../UI/Input';
import classes from './MealItemForm.module.css';

export default function MealItemForm() {
  return (
    <form className={classes.form}>
      <Input
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
    </form>
  );
}
