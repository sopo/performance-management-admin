import { QuestionsListProps } from "../interfaces/types";


export const mapQuestionsList = (questions: QuestionsListProps) => {
  return questions?.map((question) => ({
   title_en: question?.title_en,
    category_en: question?.category_en,
    key: question?.title_en
  }));
};
