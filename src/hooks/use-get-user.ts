import { getUser } from "@/api/users/get-user";
import { User } from "@supabase/supabase-js";
import { UseQueryOptions, UseQueryResult, useQuery } from "react-query";
import { QUERY_KEYS } from "./enums";

const useGetUser = <T = User>({
  id,
  queryOptions,
}: {
  id: string;
  queryOptions?: Omit<UseQueryOptions<User, Error, T>, "queryKey" | "queryFn">;
}): UseQueryResult<T, Error> => {
  return useQuery<User, Error, T>({
    queryKey: [QUERY_KEYS.USER, id],
    queryFn: async () => {
      if (!id) throw new Error("missing id");

      const result = await getUser(id);
      if (!result) {
        throw new Error("User not found");
      }

      return result;
    },
    ...queryOptions,
  });
};

export default useGetUser;
