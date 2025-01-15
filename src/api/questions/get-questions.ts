import { supabase } from "@/supabase";

export const getQuestions = async () => {
  return supabase
    .from("questions")
    .select("*")
    .throwOnError()
    .then((res) => {
      return res.data;
    });
};