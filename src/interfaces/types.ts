import { Tables, TablesInsert } from "../supabase/database.types";

export type QuestionInsert = TablesInsert<"questions">;
export type ProfileInsert = TablesInsert<"profiles">;
export type Profile = Tables<"profiles">;
