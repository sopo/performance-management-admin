import { useMutation } from "react-query";
import { AddUser as AddUserApi } from "@/api/users/add-user";
import { RegisterProps } from "@/interfaces/interfaces";
import { ProfileInsert } from "@/interfaces/types";

const useAddUser = (onSuccess: () => void) => {
  const mutation = useMutation(
    (values: RegisterProps & ProfileInsert) => AddUserApi(values),
    {
      onSuccess,
    },
  );

  return {
    mutate: mutation.mutate,
    isLoading: mutation.isLoading,
    isError: mutation.isError,
    error: mutation.error,
  };
};

export default useAddUser;
