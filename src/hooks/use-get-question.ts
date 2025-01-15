import { QUERY_KEYS } from "./enums";
import { useQuery } from "react-query";
import { getQuestion } from "@/api/questions/get-question";

const useGetQuestion = ({ id }: { id: string }) => {
  return useQuery({
    queryKey: [QUERY_KEYS.QUESTION, id],
    queryFn: async () => {
      const result = await getQuestion(id);
      return result || null;
    },
  });
};

export default useGetQuestion;
