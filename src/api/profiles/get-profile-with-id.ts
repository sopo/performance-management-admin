import { supabase } from "@/supabase";

export const getProfileWithId = async (id: string) => {
  return await supabase
    .from("profiles")
    .select("*")
    .eq("user_id", id)
    .throwOnError();
};
