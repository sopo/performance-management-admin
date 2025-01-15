import { supabase } from "@/supabase";
import { RegisterProps } from "@/interfaces/interfaces";
import { ProfileInsert } from "@/interfaces/types";
export const AddUser = async (payload: RegisterProps & ProfileInsert) => {
  try {
    const { data, error } = await supabase.auth.admin.createUser({
      email: payload.email,
      password: payload.password,
    });
    const profileResponse = await supabase
      .from("profiles")
      .insert([
        {
          user_id: data.user?.id,
          display_name_en: payload.display_name_en || null,
          display_name_ka: payload.display_name_ka || null,
          position_en: payload.position_en || null,
          position_ka: payload.position_ka || null,
        },
      ])
      .select();

    if (error || profileResponse.error) throw error;
    return data;
  } catch (error) {
    console.error("Error creating user:", error);
    throw error;
  }
};

