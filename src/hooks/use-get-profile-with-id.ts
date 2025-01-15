import { Profile } from "@/interfaces/types";
import { QUERY_KEYS } from "./enums";
import { useQuery, UseQueryResult } from "react-query";
import { getProfileWithId } from "@/api/profiles/get-profile-with-id";


const useGetProfiles = <T = Profile>({
  id,
}: {
  id: string;
}): UseQueryResult<T, Error> => {
  return useQuery<Profile | null, Error, T>({
    queryKey: [QUERY_KEYS.PROFILES, id],
    queryFn: async () => {
      const result = await getProfileWithId(id);
      return result.data?.[0] || null;
    },
  });
};

export default useGetProfiles;