"use client"
import React from "react";
import { useQuestionContext } from "@/context/questionContext"
import Question from "@/components/molecules/question";

const QuestionList = () => {
  const { questions } = useQuestionContext();

  return (
    <div className="flex gap-4 grid grid-cols-1 md:grid-cols-2 p-2">
      {questions.map((question) => (
        <Question 
          key={question.id}
          questionId={question.id}
        />
      ))}
    </div>
  );
};

export default QuestionList;

