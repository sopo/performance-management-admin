import { QuestionInsert } from "@/interfaces/types";
import { supabase } from "@/supabase";

export const addQuestion = async (payload: QuestionInsert) => {
  const { data, error } = await supabase
    .from("questions")
    .insert([payload])
    .select();

  if (error) {
    throw new Error(error.message);
  }

  return data;
};
