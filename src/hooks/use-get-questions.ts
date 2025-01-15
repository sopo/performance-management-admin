import { getQuestions } from "@/api/questions/get-questions";
import { QuestionInsert } from "@/interfaces/types";
import { UseQueryOptions, UseQueryResult, useQuery } from "react-query";
import { QUERY_KEYS } from "./enums";

const useGetQuestions = <T = QuestionInsert[]>({
  queryOptions,
}: {
  queryOptions?: Omit<
    UseQueryOptions<QuestionInsert[], Error, T>,
    "queryKey" | "queryFn"
  >;
} = {}): UseQueryResult<T, Error> => {
  return useQuery<QuestionInsert[], Error, T>({
    queryKey: [QUERY_KEYS.QUESTIONS],
    queryFn: async () => {
      const result = await getQuestions();
      return result ?? [];
    },
    ...queryOptions,
  });
};
export default useGetQuestions;
