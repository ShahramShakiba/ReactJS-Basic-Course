import React, { useState, useRef } from 'react';

import Card from '../UI/Card';
import Button from '../UI/Button';
import ErrorModal from '../UI/ErrorModal';
import classes from './AddUser.module.css';
// import Wrapper from '../Helpers/Wrapper';

export default function AddUser(props) {
  const nameInputRef = useRef();
  const ageInputRef = useRef();
  const [error, setError] = useState();

  const addUserHandler = (event) => {
    event.preventDefault();
    const enteredName = nameInputRef.current.value;
    const enteredUserAge = ageInputRef.current.value;

    if (enteredName.trim().length === 0 || enteredUserAge.trim().length === 0) {
      setError({
        title: 'Invalid input',
        message: 'Please enter a valid name and age (non-empty values).',
      });
      return;
    }
    if (+enteredUserAge < 1) {
      setError({
        title: 'Invalid age',
        message: 'Please enter a valid age (> 0).',
      });
      return;
    }

    props.onAddUser(enteredName, enteredUserAge);
    nameInputRef.current.value = '';
    ageInputRef.current.value = '';
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <>
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
          <input ref={nameInputRef} id="username" type="text" />

          <label htmlFor="age">Age (Years)</label>
          <input ref={ageInputRef} id="age" type="number" />

          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </>
  );
}

/* 01. One limitations of JSX {One JSX element to return}
* You can't return more than one "root" JSX element (you also can't store more than one "root" JSX element in a variable).

? Solution:
01. wrapping elements with a "div" or any other element, even a custom Component

02. using an array []
return [
    error && (
      <ErrorModal
*       key="error-modal"
        title={error.title}
        message={error.message}
        onConfirm={errorHandler}
      />
    ),

*   <Card key="add-user-card" className={classes.input}>
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

/* "React.Fragment"
* It's an empty wrapper component:
  it doesn't render any real HTML element to the DOM.
  BUT it fulfills React's/JSX requirement.
? it's a built-in wrapper.

* 01
<>
    <AddUser onAddUser={addUserHandler} />
    <UsersList users={usersList} />
</>
---------------------------------------------------
* 02
import React from 'react';

<React.Fragment>
    <AddUser onAddUser={addUserHandler} />
    <UsersList users={usersList} />
</React.Fragment>
---------------------------------------------------
* 03
import React, { Fragment } from 'react';

<Fragment>
    <AddUser onAddUser={addUserHandler} />
    <UsersList users={usersList} />
</Fragment>
 
*/

/* Controlled vs Uncontrolled Component 
* Uncontrolled Component:
if we access values with a ref
    <input
      id="username"
      type="text"
      ref={nameInputRef}
    />
    ? why uncontrolled?
    ✅ because they're internal state, so to value which is reflected in them is not controlled by React.

    ✅ we rely on the default behavior of the input where a user of course is able to enter something and that entered value is reflected and then we just fetch it with a react-feature (const nameInputRef = useRef();)
    but we don't feed data back into the input


    * When we work with "input-components" in React, that's why we typically have this controlled and uncontrolled thing

    ? Controlled : 
    Where we manage our state and we updated that state on every keystroke and we feed that state back into the input with the "value" prop 
*/

/* Before using Refs :
export default function AddUser(props) {
  const [enteredUsername, setEnteredUsername] = useState('');
  const [enteredAge, setEnteredAge] = useState('');
  const [error, setError] = useState();

  const addUserHandler = (event) => {
    event.preventDefault();

    if (enteredUserName.trim().length === 0 || enteredAge.trim().length === 0) {
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

    (_____Reset value :
     You shouldn't manipulate the DOM without React, but if you just
     wanna reset the value entered by a user, 
     it's something you can consider doing_______) 
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
    <>
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
    </>
  );
}


*/
