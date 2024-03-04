import React, { useContext, useEffect, useReducer, useState } from 'react';
import Card from '../UI/Card/Card';
import Button from '../UI/Button/Button';
import classes from './Login.module.css';
import AuthContext from '../../context/auth-context';

const emailReducer = (state, action) => {
  if (action.type === 'USER_INPUT') {
    return { value: action.val, isValid: action.val.includes('@') };
  }
  if (action.type === 'INPUT_BLUR') {
    return { value: state.value, isValid: state.value.includes('@') };
  }

  return { value: '', isValid: undefined };
};

const passwordReducer = (state, action) => {
  if (action.type === 'USER_PASSWORD') {
    return { value: action.val, isValid: action.val.trim().length > 6 };
  }
  if (action.type === 'PASSWORD_BLUR') {
    return { value: state.value, isValid: state.value.trim().length > 6 };
  }
  return { value: '', isValid: undefined };
};

export default function Login() {
  const authCtx = useContext(AuthContext);

  const [formIsValid, setFormIsValid] = useState(false);

  const [emailState, dispatchEmail] = useReducer(emailReducer, {
    value: '',
    isValid: undefined,
  });
  const [passwordState, dispatchPassword] = useReducer(passwordReducer, {
    value: '',
    isValid: undefined,
  });

  const { isValid: emailIsValid } = emailState;
  const { isValid: passwordIsValid } = passwordState;
  useEffect(() => {
    const timer = setTimeout(() => {
      setFormIsValid(emailIsValid && passwordIsValid);
    }, 500);

    return () => {
      clearTimeout(timer);
    };
  }, [emailIsValid, passwordIsValid]);

  const emailChangeHandler = (e) => {
    dispatchEmail({
      type: 'USER_INPUT',
      val: e.target.value,
    });
  };

  const validateEmailHandler = () => {
    dispatchEmail({
      type: 'INPUT_BLUR',
    });
  };

  const passwordChangeHandler = (e) => {
    dispatchPassword({
      type: 'USER_PASSWORD',
      val: e.target.value,
    });
  };

  const validatePasswordHandler = () => {
    dispatchPassword({
      type: 'PASSWORD_BLUR',
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    authCtx.onLogin(emailState.value, passwordState.value);
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <div
          className={`${classes.control} ${
            emailState.isValid === false ? classes.invalid : ''
          }`}
        >
          <label htmlFor="email"> E-Mail </label>
          <input
            type="email"
            id="email"
            value={emailState.value}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
          />
        </div>

        <div
          className={`${classes.control} ${
            passwordState.isValid === false ? classes.invalid : ''
          }`}
        >
          <label htmlFor="password"> Password </label>
          <input
            type="password"
            id="password"
            value={passwordState.value}
            onChange={passwordChangeHandler}
            onBlur={validatePasswordHandler}
          />
        </div>

        <div className={classes.actions}>
          <Button type="submit" className={classes.btn} disabled={!formIsValid}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
}

/* useEffect()
useEffect(() => {
  ? /// Avoiding sending a lot of request on every keystroke to prevent unnecessary Network Traffic
    const timer = setTimeout(() => {
      console.log('Checking form validity!');
      setFormIsValid(
        enteredEmail.includes('@') && enteredPassword.trim().length > 6
      );
    }, 500);

  ? /// Cleanup Function: to have one ongoing timer at a time - only the last timer will complete
    return () => {
      console.log('CLEAN UP!');
      clearTimeout(timer);
    };
  }, [enteredEmail, enteredPassword]);
_____________________________________________________________

  * we use the useEffect above due to the form validity
  setFormIsValid(
    e.target.value.includes('@') && passwordState.isValid
  )

  -this approach is not optimal
  - we derive the form validity of other state due to react scheduling the state updates so we must refer to an old state here 
  - and we can not use ()=>{} for passwordState to get the latest state because using ()=>{} will give us the latest state for the "setFormIsValid"
*/

/* useReducer()
const [state, dispatch] = useReducer(reducerFn, initialState, initFn);
* state: 
  the state snapshot used in the component re-render

* dispatch: 
  dispatch a new action(trigger on update of the state)

* reducerFn: 
  is triggered automatically once an action is dispatched | it receives the latest state snapshot and should return the new, updated state

  it can be created "outside of the component function", because inside of this reducerFn we won't need any data that's generated inside of the component fun, all the data which will be required and used will be passed into this function when it's executed by React automatically

* initialState:
  the initial state

* initFn:
  a function to set the initial state programmatically in case the initial state is a bit complex, like the results of HTTP request
*/

/* "INPUT_BLUR"
 if (action.type === 'INPUT_BLUR') {
    return { value: state.value, isValid: state.value.includes('@') };
  }

  * value: state.value
   the value should be the value we had before, that's why we use the last state snapshot
*/
