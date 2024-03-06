import { useState } from 'react';
import Answers from './Answers';
import QuestionTimer from './QuestionTimer';
import QUESTIONS from '../questions';

export default function Question({
  questionIndex,
  onSelectAnswer,
  onSkipAnswer,
}) {
  const [answer, setAnswer] = useState({
    selectedAnswer: '',
    isCorrect: null,
  });

  const handleSelectAnswer = (answer) => {
    setAnswer({
      selectedAnswer: answer,
      isCorrect: null,
    });

    setTimeout(() => {
      setAnswer({
        selectedAnswer: answer,
        isCorrect: QUESTIONS[questionIndex].answers[0] === answer,
      });

      setTimeout(() => {
        onSelectAnswer(answer);
      }, 2000);
    }, 1000);
  };

  let answerState = '';
  if (answer.selectedAnswer && answer.isCorrect !== null) {
    answerState = answer.isCorrect ? 'correct' : 'wrong';
  } else if (answer.selectedAnswer) {
    answerState = 'pending';
  }

  return (
    <div id="question">
      <QuestionTimer timeout={15000} onTimeout={onSkipAnswer} />

      <h2> {QUESTIONS[questionIndex].title} </h2>

      <Answers
        answers={QUESTIONS[questionIndex].answers}
        selectedAnswer={answer.selectedAnswer}
        answerState={answerState}
        onSelect={handleSelectAnswer}
      />
    </div>
  );
}
