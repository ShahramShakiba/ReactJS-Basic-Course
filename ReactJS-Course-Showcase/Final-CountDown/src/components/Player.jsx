import { useRef, useState } from 'react';

export default function Player() {
  const playerName = useRef();
  const [enteredPlayerName, setEnteredPlayerName] = useState('');

  function handleClick() {
    setEnteredPlayerName(playerName.current.value);
    playerName.current.value = '';
  }

  return (
    <section id="player">
      <h2>
        Welcome {enteredPlayerName ? enteredPlayerName : 'unknown entity'}
      </h2>

      <p>
        <input ref={playerName} type="text" />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}

/*  *Step-1*
export default function Player() {
  const [enteredPlayerName, setEnteredPlayerName] = useState('');
  const [submitted, setSubmitted] = useState(false);

  function handleChange(event) {
    setSubmitted(false);
    setEnteredPlayerName(event.target.value);
  }

  function handleClick() {
    setSubmitted(true);
  }

  return (
    <section id="player">
      <h2>Welcome {submitted ? enteredPlayerName : 'unknown entity'}</h2>

      <p>
        <input type="text" onChange={handleChange} value={enteredPlayerName} />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}

*/

/* useRef()
* useRef is a React Hook that lets you reference a value that’s not needed for rendering.

for example; where you wanna rea a value from an input field, it can save you a lot of code and lead to leaner Components.

? must be called inside of a Component-function

? Here, I create a "ref" to get the value that will be entered into this input field 

You can connect "refs" to JSX elements with a special prop "ref={}" which like the key-prop is a special prop

* for all refs values, you have to access a "current" property
-> and then in this current-property that the actual ref-value, so in this case,
the connected "input" will be stored -> now I can access all the methods and properties that are exposed by that input HTML-element


? whenever a ref changes, the component function does not re-execute.

! State
1. Causes component re-evaluation(re-execution) when changed
2. Should be used for values that are directly reflected in the UI
3. Should not be used for "behind the scenes" values that have no direct UI impact

! Refs
1.Do not cause component re-evaluation when changed
2. Can be used to gain direct DOM element access(great for reading values or accessing certain browser APIs)
*/
