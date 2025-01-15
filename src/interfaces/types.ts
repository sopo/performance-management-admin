import { Database, TablesInsert } from "../supabase/database.types";

export type QuestionsListProps =
  Database["public"]["Tables"]["questions"]["Insert"][];
export type QuestionProps = Database["public"]["Tables"]["questions"]["Insert"];

export type ProfileInsert = TablesInsert<"profiles">
