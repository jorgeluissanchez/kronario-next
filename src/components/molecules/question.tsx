import React from "react";
import Typography from "@/components/atoms/typography";
import { useQuestionContext } from "@/context/questionContext";

interface QuestionProps {
  questionId: number;
}

const Question: React.FC<QuestionProps> = ({ questionId }) => {
  const { questions, selectedQuestions, setSelectedQuestion } = useQuestionContext();

  const question = questions.find((q:any) => q.id === questionId);
  if (!question) {
    return null;
  }

  const selectedQuestion = selectedQuestions.find((q:any) => q.questionId === questionId);
  const selectedAnswer = selectedQuestion?.answerId ?? null;

  const handleAnswerClick = (answerId: number) => {
      setSelectedQuestion(questionId, answerId);
  };

  let className = "";
  switch (question.answers.length) {
    case 2:
      className = "grid-cols-1 md:grid-cols-2";
      break;
    case 3:
      className = "grid-cols-1 md:grid-cols-3";
      break;
    case 4:
      className = "grid-cols-1 md:grid-cols-3 lg:grid-cols-4";
      break;
    case 5:
      className = "grid-cols-1 md:grid-cols-3 lg:grid-cols-5";
      break;
    default:
      break;
  }

  return (
    <div className={`bg-white rounded-lg p-4 flex flex-col ${selectedAnswer !== null ? 'bg-gray-300' : ''} cursor-pointer hover:bg-gray-200 relative`}>
      <div className="px-4 pb-2">
        <Typography type="p" color="blue">
          {question.question}
        </Typography>
      </div>
      <ul className={`grid ${className} gap-4 p-2 bg-white rounded-lg`}>
        {question.answers.map((answer: any, index:any) => (
          <li
            key={index}
            className={`bg-gray-100 rounded-lg p-4 flex flex-col cursor-pointer hover:bg-gray-200 ${selectedAnswer === index ? 'bg-gray-300' : ''}`}
            onClick={() => handleAnswerClick(index)}
          >
            <Typography type="subtext" color="gray">
              {answer}
            </Typography>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Question;
