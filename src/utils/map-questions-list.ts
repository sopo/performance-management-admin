import { QuestionsListProps } from "../interfaces/types";

export const mapQuestionsList = (questions: QuestionsListProps) => {
  return questions?.map((question) => ({
    title_en: question?.title_en,
    title_ka: question?.title_ka,
    category_en: question?.category_en,
    category_ka: question?.category_ka,
    key: question?.title_en,
  }));
};
