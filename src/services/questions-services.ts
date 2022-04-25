import { QuestionsFilter } from "src/models/QuestionsFilter";
import axios from "src/services/axios";

export const getQuestionsService = async (filters: QuestionsFilter) => {
  return await axios.get(
    `?amount=${filters.amount}&difficulty=${filters.difficulty}&type=multiple`
  );
};
