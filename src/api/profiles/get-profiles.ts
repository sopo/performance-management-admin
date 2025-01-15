import { supabase } from "@/supabase";

export const getProfiles = async () => {
    return await supabase.from("profiles").select("*").throwOnError();
  };
  