import { Profile } from "@/interfaces/types";

export const mapProfilesList = (profiles: Profile[]) => {

  return profiles?.map((profile) => ({
    display_name_en: profile?.display_name_en,
    display_name_ka: profile?.display_name_ka,
    position_en: profile?.position_en,
    position_ka: profile?.position_ka,
    user_id: profile?.user_id
  }));
};
