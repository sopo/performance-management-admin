import { useForm } from "antd/es/form/Form";
import { useAtom } from "jotai";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { RegisterProps } from "@/interfaces/interfaces";
import { UserAtom } from "@/store/auth";
import EditUserForm from "../components/user-form";
import { USERS_PATHS } from "../users-routes";
import useGetUser from "@/hooks/use-get-user";
import useEditUser from "@/hooks/use-edit-user";
import useGetProfileWithId from "@/hooks/use-get-profile-with-id";

const EditUser: React.FC = () => {
  const navigate = useNavigate();
  const [user] = useAtom(UserAtom);
  const [form] = useForm();
  const { id } = useParams();
  const { t } = useTranslation();

  const {
    mutate,
    isLoading: isEditLoading,
    isError: isEditError,
    error: editError,
  } = useEditUser(id || "", () => {
    navigate(`/${USERS_PATHS.USERS}/${USERS_PATHS.USERS_LIST}`);
  });

  const { data, isLoading, isError, error } = useGetUser({
    id: id || "",
  });
  const {data: profile} = useGetProfileWithId({ id: id || ""})

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (isError) {
    return <div>Error: {error instanceof Error ? error.message : "Error"}</div>;
  }
  if (isEditLoading) {
    return <div>Loading...</div>;
  }

  if (isEditError) {
    return (
      <div>
        Error: {editError instanceof Error ? editError.message : "Error"}
      </div>
    );
  }
  if (!user) {
    return <Navigate to={USERS_PATHS.USERS_LIST} />;
  }

  const handleSubmit = (values: RegisterProps) => {
    mutate(values);
  };

  return (
    <div className="flex flex-col gap-10 justify-center items-center mx-auto my-5 md:my-20 w-96">
      <h1 className="text-xl font-semibold text-gray-900">
        {t("dashboard.users.form.titleEdit")}
      </h1>

      <EditUserForm
        form={form}
        initialValues={{
          email: data?.email || "",
          password: "",
          position_en: profile?.position_en,
          position_ka: profile?.position_ka,
          display_name_en: profile?.display_name_en,
          display_name_ka: profile?.display_name_ka
          
        
        }}
        onSubmit={handleSubmit}
      />
    </div>
  );
};
export default EditUser;
