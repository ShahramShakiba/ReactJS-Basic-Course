import { useRef, useState } from 'react';
import ResultModal from './ResultModal.jsx';

function TimerChallenge({ title, targetTime }) {
  const timer = useRef();
  const dialog = useRef();

  // targetTime * 1000 => in milliseconds
  const [timeRemaining, setTimeRemaining] = useState(targetTime * 1000);

  const timerIsActive = timeRemaining > 0 && timeRemaining < targetTime * 1000;

  if (timeRemaining <= 0) {
    clearInterval(timer.current);

    // the timer expired | we lost
    dialog.current.open();
  }

  function handleReset() {
    setTimeRemaining(targetTime * 1000);
  }

  function handleStart() {
    timer.current = setInterval(() => {
      setTimeRemaining((prevTimeRemaining) => prevTimeRemaining - 10);
    }, 10);
  }

  function handleStop() {
    // manually stopped the timer | we won
    dialog.current.open();

    clearInterval(timer.current);
  }

  return (
    <>
      <ResultModal
        ref={dialog}
        targetTime={targetTime}
        remainingTime={timeRemaining}
        onReset={handleReset}
      />

      <section className="challenge">
        <h2>{title}</h2>

        <p className="challenge-time">
          {targetTime} second{targetTime > 1 ? 's' : ''} !
        </p>

        <p>
          <button onClick={timerIsActive ? handleStop : handleStart}>
            {timerIsActive ? 'Stop' : 'Start'} Challenge
          </button>
        </p>

        <p className={timerIsActive ? 'active' : undefined}>
          {timerIsActive ? 'Time is running...' : 'Timer inactive!'}
        </p>
      </section>
    </>
  );
}

export default TimerChallenge;

/* const timer = useRef();
we use "ref" to avoid updating UI instead of "state" and "variable" 
let timer;
*/

/* before enhancing the code
import { useRef, useState } from 'react';
import ResultModal from './ResultModal.jsx';

function TimerChallenge({ title, targetTime }) {
?  const [timerStarted, setTimerStarted] = useState(false);
  // to know once the timer expired
?  const [timerExpired, setTimerExpired] = useState(false);

  // let timer;
  //  we use "ref" to avoid updating UI instead of "state" and "variable" 
  const timer = useRef();
  const dialog = useRef();

  function handleStart() {
  ?  setTimerStarted(true);

  ?  timer.current = setTimeout(() => {
  ?    setTimerExpired(true);

  ?    dialog.current.open();
  ?  }, targetTime * 1000);
  }

  function handleStop() {
  ?  clearTimeout(timer.current);
  }

  return (
    <>
      <ResultModal ref={dialog} targetTime={targetTime} result="lost" />

      <section className="challenge">
        <h2>{title}</h2>

        <p className="challenge-time">
          {targetTime} second{targetTime > 1 ? 's' : ''} !
        </p>

        <p>
          <button onClick={timerStarted ? handleStop : handleStart}>
            {timerStarted ? 'Stop' : 'Start'} Challenge
          </button>
        </p>

        <p className={timerStarted ? 'active' : undefined}>
          {timerStarted ? 'Time is running...' : 'Timer inactive!'}
        </p>
      </section>
    </>
  );
}

export default TimerChallenge;
*/

/* setTimeRemaining((prevTimeRemaining) => prevTimeRemaining - 10);
?this state here gets updated every 10 milliseconds with the updated time remaining
 */

/*  if (timeRemaining <= 0) {
    clearInterval(timer.current);
  }

  * "setInterval" won't stop on it's own because it has no end date, so to say,it just keep s on firing every 10 milliseconds 
  function handleStart() {
    timer.current = setInterval(() => {
      setTimeRemaining((prevTimeRemaining) => prevTimeRemaining - 10);
    }, 10);
  }

  ? so we have to clear this "interval" if we determine that the time is up, which is the case if the timeRemaining is zero or smaller than that

  ? that's why we call "clearInterval" here
*/
