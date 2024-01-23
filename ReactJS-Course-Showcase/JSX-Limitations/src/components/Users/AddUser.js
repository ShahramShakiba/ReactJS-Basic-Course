import React, { useState } from 'react';

import Card from '../UI/Card';
import Button from '../UI/Button';
import ErrorModal from '../UI/ErrorModal';
import classes from './AddUser.module.css';
import Wrapper from '../Helpers/Wrapper';

const AddUser = (props) => {
  const [enteredUsername, setEnteredUsername] = useState('');
  const [enteredAge, setEnteredAge] = useState('');
  const [error, setError] = useState();

  const addUserHandler = (event) => {
    event.preventDefault();
    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title: 'Invalid input',
        message: 'Please enter a valid name and age (non-empty values).',
      });
      return;
    }
    if (+enteredAge < 1) {
      setError({
        title: 'Invalid age',
        message: 'Please enter a valid age (> 0).',
      });
      return;
    }
    props.onAddUser(enteredUsername, enteredAge);
    setEnteredUsername('');
    setEnteredAge('');
  };

  const usernameChangeHandler = (event) => {
    setEnteredUsername(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <Wrapper>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}

      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            value={enteredUsername}
            onChange={usernameChangeHandler}
          />

          <label htmlFor="age">Age (Years)</label>
          <input
            id="age"
            type="number"
            value={enteredAge}
            onChange={ageChangeHandler}
          />

          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </Wrapper>
  );
};

export default AddUser;

/* 01. One limitations of JSX {One JSX element to return}
* You can't return more than one "root" JSX element (you also can't store more than one "root" JSX element in a variable).

? Solution:
01. wrapping elements with a "div" or any other element, even a custom Component

02. using an array []
return [
    error && (
      <ErrorModal
        key="error-modal"
        title={error.title}
        message={error.message}
        onConfirm={errorHandler}
      />
    ),

    <Card key="add-user-card" className={classes.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input
          id="username"
          type="text"
          value={enteredUsername}
          onChange={usernameChangeHandler}
        />

        <label htmlFor="age">Age (Years)</label>
        <input
          id="age"
          type="number"
          value={enteredAge}
          onChange={ageChangeHandler}
        />

        <Button type="submit">Add User</Button>
      </form>
    </Card>,
  ];

  ? This has a little gotcha: 
    we can return an array because React is able to work with arrays of JSX elements, BUT
        * whenever you're working with an array of JSX elements React wants a "key" on every element

        * we could add the key prop with our own invented well use 

    * this way is a bit "cumbersome" 
*/

/* "div soup"
<div>
  <div>
    <div>
      <div>
        <h2>Some content -yeah, this can really happen</h2>
      </div>
    </div>
  </div>
</div>

? in bigger apps, you can easily end up with tons of unnecessary <div>s (or other elements) which add "no semantic meaning or structure" to the page but "are only there because of React's/JSX requirement".

? that also makes your application slower because the browser needs to render all those elements and React needs to check all those elements or at least some of those elements if content needs to change

* Rendering unnecessary content is generally never a good idea in programming!
*/

/* "Custom Wrapper"
create a folder in component named: "Helpers"
create a file in Helpers named:  "Wrapper.js"

add: const Wrapper = (props) => {
       return props.children;
      };

      export default Wrapper;

      * children props holds all the content you're passing between the opening and closing tag of your custom component

Then: 
import Wrapper from '../Helpers/Wrapper';

? it's an empty component
<Wrapper>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}

      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          .....
        </form>
      </Card>
    </Wrapper>
*/


