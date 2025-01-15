import { QuestionInsert } from "@/interfaces/types";
import { supabase } from "@/supabase";

export const editQuestion = async (
  id: number | string,
  payload: QuestionInsert,
) => {
  const { data, error } = await supabase
    .from("questions")
    .update(payload)
    .eq("id", id)
    .select();

  if (error) {
    throw new Error(error.message);
  }

  return data;
};
