import { useMutation } from "react-query";
import { editQuestion } from "@/api/questions/edit-question";
import { QuestionInsert } from "@/interfaces/types";

const useEditquestion = (id: number, onSuccess: () => void) => {
  const mutation = useMutation(
    (values: QuestionInsert) => {
      if (id) {
        return editQuestion(id, values);
      }
      return Promise.reject("no ID found");
    },
    {
      onSuccess,
    },
  );

  return {
    mutate: mutation.mutate,
    isLoading: mutation.isLoading,
    isError: mutation.isError,
    error: mutation.error,
  };
};

export default useEditquestion;
