import { supabase } from "@/supabase";
import { RegisterProps } from "@/interfaces/interfaces";
import { ProfileInsert } from "@/interfaces/types";
export const AddUser = async (payload: RegisterProps) => {
  try {
    const { data, error } = await supabase.auth.admin.createUser({
      email: payload.email,
      password: payload.password,
      user_metadata: {displayName: payload.name, userRole: payload.role, subordinates: payload.subordinates, manager: payload.manager}
    });
    const profileResponse = await supabase
    .from("profiles")
    .insert([{display_name: payload.name, user_id: data.user?.id}])
    .select();

    if (error || profileResponse.error) throw error;
    return data;
  } catch (error) {
    console.error("Error creating user:", error);
    throw error;
  }
};

export const addProfile = async(payload: ProfileInsert) => {
  const profileData = {
    display_name_en: payload.display_name_en || null,
    display_name_ka: payload.display_name_ka || null,
    position_en: payload.position_en || null,
    position_ka: payload.position_ka || null,
};

 await supabase
.from('profiles')
.insert([
  profileData
])
.select()

}