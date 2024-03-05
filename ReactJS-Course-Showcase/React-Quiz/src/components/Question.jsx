import Answers from './Answers';
import QuestionTimer from './QuestionTimer';

export default function Question({
  questionTitle,
  answers,
  onSelectAnswer,
  selectedAnswer,
  answerState,
  onSkipAnswer,
}) {
  return (
    <div id="question">
      <QuestionTimer timeout={15000} onTimeout={onSkipAnswer} />

      <h2> {questionTitle} </h2>

      <Answers
        answers={answers}
        selectedAnswer={selectedAnswer}
        answerState={answerState}
        onSelect={onSelectAnswer}
      />
    </div>
  );
}
