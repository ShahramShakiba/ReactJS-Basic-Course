import { useState } from 'react';

function TimerChallenge({ title, targetTime }) {
  const [timerStarted, setTimerStarted] = useState(false);
  // to know once the timer expired
  const [timerExpired, setTimerExpired] = useState(false);

  function handleStart() {
    setTimerStarted(true);

    setTimeout(() => {
      setTimerExpired(true);
    }, targetTime * 1000);
  }

  return (
    <section className="challenge">
      <h2>{title}</h2>

      {timerExpired && <p>You lost!</p>}

      <p className="challenge-time">
        {targetTime} second{targetTime > 1 ? 's' : ''}!
      </p>

      <p>
        <button onClick={handleStart}>
          {timerStarted ? 'Stop' : 'Start'} Challenge
        </button>
      </p>

      <p className={timerStarted ? 'active' : undefined}>
        {timerStarted ? 'Time is running...' : 'Timer inactive'}
      </p>
    </section>
  );
}

export default TimerChallenge;
