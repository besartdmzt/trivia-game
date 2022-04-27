import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getQuestionsService } from "src/services/questions-services";
import { Answer, Question, QuestionAPI } from "src/models/Question";
import { Loading } from "src/models/Loading";
import { QuestionsFilter } from "src/models/QuestionsFilter";

export interface GameState {
  score: 0;
  questions: Question[];
  loading: Loading;
}

const initialState: GameState = {
  score: 0,
  questions: [],
  loading: Loading.UNINITIALIZED,
};

// here we create a new object which will add all the answers to the list and put the correct one in a random position
const convertFromApiToData = (questionsApi: QuestionAPI[]): Question[] => {
  return questionsApi.map((data) => {
    const wrongAnswers = data.incorrect_answers.map((answer) => {
      return {
        isCorrect: false,
        answer,
      };
    });
    const correctAnswer = { isCorrect: true, answer: data.correct_answer };
    const regex = /(<([^>]+)>)/gi;
    return {
      question: data.question?.replace(regex, ""),
      answers: shuffle([...wrongAnswers, correctAnswer]),
    };
  });
};

// shuffle the answers
const shuffle = (answers: Answer[]) => {
  let currentIndex = answers.length,
    randomIndex;
  // While there remain elements to shuffle.
  while (currentIndex !== 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [answers[currentIndex], answers[randomIndex]] = [
      answers[randomIndex],
      answers[currentIndex],
    ];
  }
  return answers;
};

export const getQuestions = createAsyncThunk(
  "game/getQuestions",
  async (questionsFilter: QuestionsFilter) => {
    const response = await getQuestionsService(questionsFilter);
    return convertFromApiToData(response.data.results);
  }
);

export const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    incrementScore: (state) => {
      state.score += 1;
    },
    removeFirstQuestion: (state) => {
      const questions = state.questions;
      questions.shift();
      state.questions = questions;
    },
    clearScoreAndQuestions: (state) => {
      state.score = 0;
      state.questions = [];
      state.loading = Loading.UNINITIALIZED;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getQuestions.pending, (state) => {
        state.loading = Loading.LOADING;
        state.questions = [];
      })
      .addCase(getQuestions.fulfilled, (state, action) => {
        state.loading = Loading.SUCCESS;
        state.questions = action.payload;
      })
      .addCase(getQuestions.rejected, (state) => {
        state.loading = Loading.FAILED;
        state.questions = [];
      });
  },
});

export const { incrementScore, removeFirstQuestion, clearScoreAndQuestions } =
  gameSlice.actions;
export default gameSlice.reducer;
