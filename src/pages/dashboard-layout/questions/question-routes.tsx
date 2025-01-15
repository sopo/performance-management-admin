import { AddQuestion } from "./lazy-imports/add-question.loader";
import { EditQuestion } from "./lazy-imports/edit-question.loader";
import { Questions } from "./lazy-imports/questions.loader";
import QuestionsLayout from "./views/questions-layout";

export enum QUESTIONS_PATHS {
  QUESTIONS = "questions",
  QUESTIONS_LIST = "questions-list",
  QUESTIONS_EDIT = "edit",
  QUESTIONS_ADD = "add",
}

export const QUESTIONS_ROUTES = [
  {
    path: QUESTIONS_PATHS.QUESTIONS,
    element: <QuestionsLayout />,
    children: [
      {
        path: QUESTIONS_PATHS.QUESTIONS_LIST,
        element: <Questions />,
      },
      {
        path: QUESTIONS_PATHS.QUESTIONS_ADD,
        element: <AddQuestion />,
      },
      {
        path: QUESTIONS_PATHS.QUESTIONS_EDIT + "/:id",
        element: <EditQuestion />,
      },
    ],
  },
];
