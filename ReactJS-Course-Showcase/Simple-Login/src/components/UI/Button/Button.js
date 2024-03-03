import classes from './Button.module.css';

export default function Button({
  children,
  onClick,
  className,
  type,
  disabled,
}) {
  return (
    <button
      type={type || 'button'}
      className={`${classes.button} ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
