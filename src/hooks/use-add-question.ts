import { useMutation } from "react-query";
import { addQuestion } from "@/api/questions/add-question";
import { QuestionProps } from "@/interfaces/types";

const useAddQuestion = (onSuccess: () => void) => {
  const mutation = useMutation((values: QuestionProps) => addQuestion(values), {
    onSuccess,
  });

  return mutation;
};

export default useAddQuestion;
