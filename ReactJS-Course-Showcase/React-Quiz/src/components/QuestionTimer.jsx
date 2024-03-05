import { useState, useEffect } from 'react';

export default function QuestionTimer({ onTimeout, timeout }) {
  const [remainingTime, setRemainingTime] = useState(timeout);

  // to not have multiple timers up and running when interval is updating
  useEffect(() => {
    console.log('SETTING TIMEOUT');

    // set a timer to answer and expire after some times
    const timer = setTimeout(onTimeout, timeout);

    // cleanup fn | cleanup timer when the game completed
    return () => clearTimeout(timer);
  }, [onTimeout, timeout]);

  // prevent infinite loop
  useEffect(() => {
    console.log('SETTING INTERVAL');

    // update progress-bar on 100 milliseconds
    const interval = setInterval(() => {
      setRemainingTime((prevRemainingTime) => prevRemainingTime - 100);
    }, 100);

    /* cleanup fn : 
       01. to move on next Q instantly after timer expired 
       02. prevent the timer goes twice time as faster as it should be */ 
    return () => clearInterval(interval);
  }, []);

  return <progress id="question-time" max={timeout} value={remainingTime} />;
}
