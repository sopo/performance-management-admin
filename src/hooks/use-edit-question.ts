import { useMutation } from "react-query";
import { editQuestion } from "@/api/questions/edit-question";
import { QuestionProps } from "@/interfaces/types";

const useEditquestion = (id: string, onSuccess: () => void) => {
  const mutation = useMutation(
    (values: QuestionProps) => {
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
