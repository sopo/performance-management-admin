import { Button, Table } from "antd";
import { EditOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { mapUsersList } from "@/utils/map-users-list";
import { USERS_PATHS } from "../users-routes";
import useGetUsers from "@/hooks/use-get-users";
import useGetProfiles from "@/hooks/use-get-profiles";
import { mapProfilesList } from "@/utils/map-profiles-list";

const { Column } = Table;
const Users: React.FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const handleEditClick = (id: string) => {
    navigate(`/${USERS_PATHS.USERS}/${USERS_PATHS.USERS_EDIT}/${id}`);
  };

  const {
    data: users,
    isLoading,
    isError,
    error,
  } = useGetUsers({ queryOptions: { select: mapUsersList } });
  const { data: profiles } = useGetProfiles({
    queryOptions: { select: mapProfilesList },
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (isError) {
    return <div>Error: {error instanceof Error ? error.message : "Error"}</div>;
  }
  const mergedData = profiles?.map((profile) => {
    const user = users?.find((user) => user.id === profile.user_id);
    return user
      ? {
          ...user,
          ...profile,
        }
      : profile;
  });

  console.log("users", users);
  return (
    <Table
      title={() => (
        <Button
          onClick={() =>
            navigate(`/${USERS_PATHS.USERS}/${USERS_PATHS.USERS_ADD}`)
          }
        >
          {" "}
          {t("dashboard.users.cta")}
        </Button>
      )}
      bordered
      dataSource={mergedData}
    >
      <Column title={t("dashboard.users.columns.email")} dataIndex="email" />
      <Column
        title={t("dashboard.users.columns.registrationDate")}
        dataIndex="created_at"
      />
      <Column
        title={t("dashboard.users.columns.fullNameEn")}
        dataIndex="display_name_en"
      />
      <Column
        title={t("dashboard.users.columns.fullNameKa")}
        dataIndex="display_name_ka"
      />
      <Column
        title={t("dashboard.users.columns.positionEn")}
        dataIndex="position_en"
      />
      <Column
        title={t("dashboard.users.columns.positionKa")}
        dataIndex="position_ka"
      />
      <Column
        title={t("dashboard.users.columns.actions")}
        render={(_, row) => {
          return (
            <EditOutlined
              className="text-xl text-gray-600 hover:cursor-pointer"
              onClick={() => {
                handleEditClick(row.key);
              }}
            />
          );
        }}
      />
    </Table>
  );
};
export default Users;
