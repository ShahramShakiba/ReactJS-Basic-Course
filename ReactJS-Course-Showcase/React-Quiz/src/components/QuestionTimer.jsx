import { useState, useEffect } from 'react';

export default function QuestionTimer({ timeout, onTimeout }) {
  const [remainingTime, setRemainingTime] = useState(timeout);

  // to not have multiple timers up and running when interval is updating
  useEffect(() => {
    // set a timer to answer and expire after some times
    setTimeout(onTimeout, timeout);
  }, [onTimeout, timeout]);

  // prevent infinite loop
  useEffect(() => {
    // update progress-bar on 100 milliseconds
    setInterval(() => {
      setRemainingTime((prevRemainingTime) => prevRemainingTime - 100);
    }, 100);
  }, []);

  return <progress id="question-time" max={timeout} value={remainingTime} />;
}
