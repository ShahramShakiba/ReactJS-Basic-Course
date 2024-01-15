import { useRef, useState } from 'react';
import ResultModal from './ResultModal.jsx';

function TimerChallenge({ title, targetTime }) {
  const [timerStarted, setTimerStarted] = useState(false);
  // to know once the timer expired
  const [timerExpired, setTimerExpired] = useState(false);

  /* let timer;
     we use "ref" to avoid updating UI instead of "state" and "variable" */
  const timer = useRef();
  const dialog = useRef();

  function handleStart() {
    setTimerStarted(true);

    timer.current = setTimeout(() => {
      setTimerExpired(true);

      dialog.current.open();
    }, targetTime * 1000);
  }

  function handleStop() {
    clearTimeout(timer.current);
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
