import classes from './Input.module.css';

export default function Input({ label, input }) {
  return (
    <div className={classes.input}>
      <label htmlFor={input.id}> {label} </label>

      <input {...input} />
    </div>
  );
}
