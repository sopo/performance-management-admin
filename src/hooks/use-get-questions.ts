import { getQuestions } from "@/api/questions/get-questions";
import { QuestionProps } from "@/interfaces/types";
import { UseQueryOptions, UseQueryResult, useQuery } from "react-query";
import { QUERY_KEYS } from "./enums";

const useGetQuestions = <T = QuestionProps[]>({
  queryOptions,
}: {
  queryOptions?: Omit<
    UseQueryOptions<QuestionProps[], Error, T>,
    "queryKey" | "queryFn"
  >;
} = {}): UseQueryResult<T, Error> => {
  return useQuery<QuestionProps[], Error, T>({
    queryKey: [QUERY_KEYS.QUESTIONS],
    queryFn: async () => {
      const result = await getQuestions();
      return result ?? [];
    },
    ...queryOptions,
  });
};
export default useGetQuestions;
