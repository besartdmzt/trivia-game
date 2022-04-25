export interface QuestionAPI {
  category: string;
  type: string;
  difficulty: string;
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
}

export interface Question {
  question: string;
  answers: Answer[];
}

export interface Answer {
  isCorrect: boolean;
  answer: string;
}
