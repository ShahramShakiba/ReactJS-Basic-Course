import { forwardRef, useImperativeHandle, useRef } from 'react';
import { createPortal } from 'react-dom';

const ResultModal = forwardRef(function ResultModal(
  { targetTime, remainingTime, onReset },
  ref
) {
  const dialog = useRef();

  const userLost = remainingTime <= 0;
  // convert it to seconds
  const displayTimeRemaining = (remainingTime / 1000).toFixed(2);
  const score = Math.round((1 - remainingTime / (targetTime * 1000)) * 100);

  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      },
    };
  });

  return createPortal(
    <dialog ref={dialog} className="result-modal">
      {userLost && <h2>Oops... &nbsp; You lost 😓</h2>}
      {!userLost && <h2>Your score: &nbsp; {score} 🎊</h2>}

      <p>
        The target time was &nbsp;
        <strong>
          {targetTime} second{targetTime > 1 ? 's' : ''}.
        </strong>
      </p>
      <p>
        You stopped the timer with
        <strong> {displayTimeRemaining} seconds left.</strong>
      </p>

      <form method="dialog" onSubmit={onReset}>
        <button>Close</button>
      </form>
    </dialog>,
    document.getElementById('modal')
  );
});

export default ResultModal;

/* <dialog className="result-modal" open>
  this built-in dialog by default is invisible so I add open attribute  

  but we can't access the backdrop if we force the dialog to be visible by setting open to true like this

  we have to open this dialog programmatically 
*/

/* <form method="dialog">
if you add a form with a  method="dialog" inside of a dialog a button that submits the form wil close this dialog without any extra JS  
*/

/* import { forwardRef } from 'react';
we can't pass ref from one component to another component | but we can use a special function provided by React
 
this function is called forwardRef and it allows us to pass the reference of any component to another
*/

/* use "useImperativeHandle" in this function

import { forwardRef } from 'react';

const ResultModal = forwardRef(function ResultModal(
  { result, targetTime },
  ref
) {
  return (
    <dialog ref={ref} className="result-modal">
      <h2>You {result}</h2>

      <p>
        The target time was <strong>{targetTime} seconds.</strong>
      </p>
      <p>
        You stopped the timer with <strong>X seconds left.</strong>
      </p>

      <form method="dialog">
        <button>Close</button>
      </form>
    </dialog>
  );
});
___________________________________________________________

* The problem with the above function is :
is that the TimerChallenge-component which uses the ResultModal-component in the end needs to know that this dialog-ref here(in TimerChallenge) will be attached to this dialog-element(<dialog></dialog>) 

-> in this tiny application using above function is OK, but on bigger React Projects, you might be writting some components and other developers write other components

if other developer switches from "dialog-element" to a "div", you're lost | because now calling "showModal()" (in TimerChallenge) won't work anymore


THEREFORE, that is preferable to build this ResultModal-component such that it exposes its own function that can be called with help of a ref outside of that component (from TimerChallenge) for example, which will work independent of how this JSX code(in ResultModal) might change in the future

-> so that the person working on that ResultModal-component can change it however they want, as long as they keep this one function which is exposed to you which you call on this component(TimerChallenge) on that <ResultModal /> component, instead of calling showModal on that internal dialog element


? useImperativeHandle(ref, ()=> {})
* to define properties and methods that should be accessible on this component(ResultModal) from outside this component

* useImperativeHandle is really meant to work together with "forwardRef"

* useImperativeHandle that then returns an object which groups all the properties and methods that should be exposed by this component to other components

import { forwardRef, useImperativeHandle, useRef } from 'react';

const ResultModal = forwardRef(function ResultModal(
  { result, targetTime },
  ref
) {
  const dialog = useRef();

  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      },
    };
  });

  return (
    <dialog ref={dialog} className="result-modal">
      .....
    </dialog>
  );
});

export default ResultModal;
*/

/* const score = Math.round((1 - remainingTime / targetTime) * 100);

 to get a score between zero and 100 | remainingTime is in milliseconds that's why we should multiplied targetTime with 1000
*/
