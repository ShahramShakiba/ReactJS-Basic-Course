function ResultModal({ result, targetTime }) {
  return (
    // this built-in dialog by default is invisible so I add open attribute
    <dialog className="result-modal" open>
      <h2>You {result}</h2>

      <p>
        The target time was <strong>{targetTime} seconds.</strong>
      </p>
      <p>
        You stopped the timer with <strong>X seconds left.</strong>
      </p>

      {/* if you add a form with a  method="dialog" inside of a dialog a button that submits the form wil close this dialog without any extra JS  */}
      <form method="dialog">
        <button>Close</button>
      </form>
    </dialog>
  );
}

export default ResultModal;
