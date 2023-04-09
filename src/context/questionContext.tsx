"use client"
import React, { createContext, useContext, useState, useEffect } from "react";

interface Question {
  id: number;
  question: string;
  answers: string[];
}

interface SelectedQuestion {
  questionId: number;
  answerId: number;
}

interface QuestionContextValue {
  questions: Question[];
  selectedQuestions: SelectedQuestion[];
  setSelectedQuestion: (questionId: number, answerId: number) => void;
  questionsAndAnswersSelected: any;
}

const QuestionContext = createContext<QuestionContextValue>({
  questions: [],
  selectedQuestions: [],
  setSelectedQuestion: (questionId: number, answerId: number) => {},
  questionsAndAnswersSelected: [],
});

export const useQuestionContext = () => useContext(QuestionContext);

interface QuestionProviderProps {
  children: React.ReactNode;
}

const QuestionProvider = ({ children }: QuestionProviderProps) => {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [selectedQuestions, setSelectedQuestions] = useState<SelectedQuestion[]>([]);
  const [questionsAndAnswersSelected, setQuestionsAndAnswersSelected] = useState<any>([]);

  const setSelectedQuestion = (questionId: number, answerId: number) => {
    const questionIndex = selectedQuestions.findIndex(
      (selectedQuestion) => selectedQuestion.questionId === questionId
    );
    if (questionIndex === -1) {
      setSelectedQuestions((prevSelectedQuestions) => [
        ...prevSelectedQuestions,
        { questionId, answerId },
      ]);
    } else {
      setSelectedQuestions((prevSelectedQuestions) => {
        const newSelectedQuestions = [...prevSelectedQuestions];
        if (newSelectedQuestions[questionIndex].answerId === answerId) {
          newSelectedQuestions.splice(questionIndex, 1);
        } else {
          newSelectedQuestions[questionIndex].answerId = answerId;
        }
        return newSelectedQuestions;
      });
    }
  };

  const findQuestionsAndAnsweresSelected =  () => {
    const questionsAndAnswersSelected =  questions.map((question) => {
      const selectedQuestion = selectedQuestions.find(
        (selectedQuestion) => selectedQuestion.questionId === question.id
      );
      const selectedAnswer = selectedQuestion?.answerId ?? null;
      return { question, selectedAnswer };
    });
     setQuestionsAndAnswersSelected(questionsAndAnswersSelected);
  };

  useEffect(() => {
    findQuestionsAndAnsweresSelected();
  }, [selectedQuestions]);



  const value = {
    questions,
    selectedQuestions,
    setSelectedQuestion,
    questionsAndAnswersSelected
  };

  useEffect(() => {
    const questionList: Question[] = [
      { id: 100, question: "¿Quieres un horario mas distribuido?", answers: ["Si", "No"] },
      { id: 2, question: "¿Que tipo de ciclo prefieres?", answers: ["Nocturno", "Diurno"] },
      { id: 3, question: "¿Te gustaría una carrera con más prácticas que teóricos?", answers: ["Si", "No"] },
      { id: 4, question: "¿Preferirías una carrera con más asignaturas técnicas o más asignaturas teóricas?", answers: ["Técnicas", "Teóricas"] },
    ];
    setQuestions(questionList);
  }, []);

  return <QuestionContext.Provider value={value}>{children}</QuestionContext.Provider>;
};

export { QuestionContext, QuestionProvider };
