import { Database, Tables, TablesInsert } from "../supabase/database.types";

export type QuestionsListProps =
  Database["public"]["Tables"]["questions"]["Insert"][];
export type QuestionInsert = TablesInsert<"questions">

export type ProfileInsert = TablesInsert<"profiles">
export type Profile = Tables<'profiles'>