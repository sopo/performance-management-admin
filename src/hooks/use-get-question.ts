import { getquestion } from "@/api/questions/get-question";
import { QuestionProps } from "@/interfaces/types";
import { UseQueryOptions, UseQueryResult, useQuery } from "react-query";
import { QUERY_KEYS } from "./enums";

const useGetQuestion = <T = QuestionProps>({
  id,
  queryOptions,
}: {
  id: string | undefined;
  queryOptions?: Omit<
    UseQueryOptions<QuestionProps, Error, T>,
    "queryKey" | "queryFn"
  >;
}): UseQueryResult<T, Error> => {
  return useQuery<QuestionProps, Error, T>({
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
