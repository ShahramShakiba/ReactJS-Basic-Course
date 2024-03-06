import { useRef } from 'react';

export default function Answers({
  answers,
  selectedAnswer,
  answerState,
  onSelect,
}) {
  const shuffledAnswers = useRef();

  if (!shuffledAnswers.current) {
    // execute it when we have a question to display
    shuffledAnswers.current = [...answers];
    shuffledAnswers.current.sort(() => Math.random() - 0.5);
  }

  return (
    <ul id="answers">
      {shuffledAnswers.current.map((answer) => {
        const isSelected = selectedAnswer === answer;

        let cssClass = '';
        if (answerState === 'pending' && isSelected) {
          cssClass = 'selected';
        }
        if (
          (answerState === 'correct' || answerState === 'wrong') &&
          isSelected
        ) {
          cssClass = answerState;
        }

        return (
          <li key={answer} className="answer">
            <button
              className={cssClass}
              onClick={() => onSelect(answer)}
              disabled={answerState !== ''}
            >
              {answer}
            </button>
          </li>
        );
      })}
    </ul>
  );
}

/* useRefs & prevent shuffling the answers when they get selected

  - managing values that are stored and managed independently from the component fn lifecycle to which they belong

  if (!shuffledAnswers.current) {
    .....
  }
   - when it's undefined | if it's undefined it means it does not have any shuffled answer because that will be the initial state

   - but when it has been defined it won't shuffled the answers again
*/
