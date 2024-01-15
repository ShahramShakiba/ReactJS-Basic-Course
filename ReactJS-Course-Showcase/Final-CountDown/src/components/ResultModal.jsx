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
