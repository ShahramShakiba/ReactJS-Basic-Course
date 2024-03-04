import React, { forwardRef, useImperativeHandle, useRef } from 'react';
import classes from './Input.module.css';

const Input = forwardRef(function Input(
  { isValid, label, id, type, value, onChange, onBlur },
  ref
) {
  const inputRef = useRef();
  useImperativeHandle(ref, () => ({
    focus: () => inputRef.current.focus(),
  }));

  return (
    <div
      className={`${classes.control} ${
        isValid === false ? classes.invalid : ''
      }`}
    >
      <label htmlFor={id}> {label} </label>
      <input
        type={type}
        id={id}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        ref={inputRef}
      />
    </div>
  );
});

export default Input;
