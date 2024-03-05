import { useState, useCallback } from 'react';
import QUESTIONS from '../questions';
import quizCompleteImg from '../assets/quiz-complete.png';
import QuestionTimer from './QuestionTimer';

export default function Quiz() {
  const [userAnswers, setUserAnswers] = useState([]);

  const activeQuestionIndex = userAnswers.length;
  const quizIsComplete = activeQuestionIndex === QUESTIONS.length;

  const handleSelectAnswer = useCallback(function handleSelectAnswer(
    selectedAnswer
  ) {
    setUserAnswers((prevAnswers) => {
      return [...prevAnswers, selectedAnswer];
    });
  },
  []);

  // when the timer on QuestionTimer expired
  const handleSkipAnswer = useCallback(
    () => handleSelectAnswer(null),
    [handleSelectAnswer]
  );

  if (quizIsComplete) {
    return (
      <div id="summary">
        <img src={quizCompleteImg} alt="Trophy-icon" />
        <h2>Quiz Completed!</h2>
      </div>
    );
  }

  // execute it when we have a question to display
  const shuffledAnswers = [...QUESTIONS[activeQuestionIndex].answers];
  shuffledAnswers.sort(() => Math.random() - 0.5);

  return (
    <div id="quiz">
      <div id="question">
        <QuestionTimer
          key={activeQuestionIndex}
          timeout={10000}
          onTimeout={handleSkipAnswer}
        />

        <h2> {QUESTIONS[activeQuestionIndex].title} </h2>

        <ul id="answers">
          {shuffledAnswers.map((answer) => (
            <li key={answer} className="answer">
              <button onClick={() => handleSelectAnswer(answer)}>
                {answer}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

/* sort(() => Math.random() - 0.5)
We will end up with a negative value in 50 of 100 cases or with a positive value
*/

/* useCallback
? const cachedFn = useCallback(fn, [dependencies])

* useCallback is a React Hook that lets you cache a function definition between re-renders.
* This allows us to isolate resource intensive functions so that they will not automatically run on every render.

* Usage :
  - Skipping re-rendering of components
  - Updating state from a memoized(به خاطر سپردن) callback
  - Preventing an Effect from firing too often
  - Optimizing a custom Hook
*/

/* why we wrap "handleSelectAnswer" in useCallback?
? it could depend on props and state therefore indirectly the handleSelectAnswer fn in "handleSkipAnswer fn" depends on props and state that's why we should also wrap this fn in useCallback fn as well. so the timer don't get firing too often


const handleSelectAnswer = useCallback(fn, []);
? it does not get any dependencies because we are not using any state or props
*/

/* Reset QuestionTimer when we switch to a new question


*/
