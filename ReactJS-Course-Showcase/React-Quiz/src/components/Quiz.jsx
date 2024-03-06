import { useState, useCallback } from 'react';
import QUESTIONS from '../questions';
import quizCompleteImg from '../assets/quiz-complete.png';
import Question from './Question';

export default function Quiz() {
  const [userAnswers, setUserAnswers] = useState([]);

  const activeQuestionIndex = userAnswers.length;
  const quizIsComplete = activeQuestionIndex === QUESTIONS.length;

  // the ANSWER SELECTED
  const handleSelectAnswer = useCallback(function handleSelectAnswer(
    selectedAnswer
  ) {
    setUserAnswers((prevAnswers) => {
      return [...prevAnswers, selectedAnswer];
    });
  },
  []);

  // the ANSWER SKIPPED because the timer on QuestionTimer expired
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

  return (
    <div id="quiz">
      <Question
        key={activeQuestionIndex}
        questionIndex={activeQuestionIndex}
        onSelectAnswer={handleSelectAnswer}
        onSkipAnswer={handleSkipAnswer}
      />
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
<QuestionTimer
*   key={activeQuestionIndex}
    timeout={15000}
    onTimeout={handleSkipAnswer}
/>

*/

/* ___ activeQuestionIndex ___
 - will change right away once the user answer has been selected

?  const activeQuestionIndex =
?    answerState === '' ? userAnswers.length : answerState.length - 1;
                                            stick to the old question
*/

/* ___ const isSelected ___ 
const isSelected = userAnswers[userAnswers.length - 1] === answer;

* look at the last element to find out which answer was picked 
*/
