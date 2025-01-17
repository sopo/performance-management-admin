import { QuestionInsert } from "@/interfaces/types";
import { supabase } from "@/supabase";

export const getQuestion = async (
  id: number,
): Promise<QuestionInsert | null> => {
  const { data, error } = await supabase
    .from("questions")
    .select("*")
    .eq("id", id)
    .single();
  if (error) {
    throw new Error(error.message);
  }

  if (!data) {
    throw new Error("question not found");
  }

  return data;
};
