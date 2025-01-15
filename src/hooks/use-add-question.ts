import { useMutation } from "react-query";
import { addQuestion } from "@/api/questions/add-question";
import { QuestionInsert, } from "@/interfaces/types";

const useAddQuestion = (onSuccess: () => void) => {
  const mutation = useMutation((values: QuestionInsert) => addQuestion(values), {
    onSuccess,
  });

  return mutation;
};

export default useAddQuestion;
