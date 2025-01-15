import { Profile } from "@/interfaces/types";
import { QUERY_KEYS } from "./enums";
import {
  UseQueryOptions,
  UseQueryResult,
  useQuery,
} from "react-query";
import { getProfiles } from "@/api/profiles/get-profiles";


const useGetProfiles = <T = Profile[]>({
  queryOptions,
}: {
  queryOptions?: Omit<
    UseQueryOptions<Profile[], Error, T>,
    "queryKey" | "queryFn"
  >;
} = {}): UseQueryResult<T, Error> => {
  return useQuery<Profile[], Error, T>({
    queryKey: [QUERY_KEYS.PROFILES],
    queryFn: async () => {
      const result = await getProfiles();
      return result.data || [];
    },
    ...queryOptions,
  });
};
export default useGetProfiles;