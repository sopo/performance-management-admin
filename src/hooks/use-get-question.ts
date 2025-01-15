import { getquestion } from "@/api/questions/get-question";
import { QuestionInsert } from "@/interfaces/types";
import { UseQueryOptions, UseQueryResult, useQuery } from "react-query";
import { QUERY_KEYS } from "./enums";

const useGetQuestion = <T = QuestionInsert>({
  id,
  queryOptions,
}: {
  id: string | undefined;
  queryOptions?: Omit<
    UseQueryOptions<QuestionInsert, Error, T>,
    "queryKey" | "queryFn"
  >;
}): UseQueryResult<T, Error> => {
  return useQuery<QuestionInsert, Error, T>({
    queryKey: [QUERY_KEYS.QUESTION, id],
    queryFn: async () => {
      if (!id) {
        throw new Error("id is missing");
      }
      const result = await getquestion(id);
      if (!result) {
        throw new Error("question is missing");
      }
      return result;
    },
    enabled: !!id,
    ...queryOptions,
  });
};

export default useGetQuestion;
