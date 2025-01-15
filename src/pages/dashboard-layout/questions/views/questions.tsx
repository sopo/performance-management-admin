import { Button, Table } from "antd";
import { EditOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { QUESTIONS_PATHS } from "../question-routes";
import { mapQuestionsList } from "@/utils/map-questions-list";
import useGetQuestions from "@/hooks/use-get-questions";

const { Column } = Table;
const Questions: React.FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const handleEditClick = (id: number) => {
    navigate(
      `/${QUESTIONS_PATHS.QUESTIONS}/${QUESTIONS_PATHS.QUESTIONS_EDIT}/${id}`,
    );
  };

  const {
    data: questions,
    isLoading,
    isError,
    error,
  } = useGetQuestions({ queryOptions: { select: mapQuestionsList } });
  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (isError) {
    return <div>Error: {error instanceof Error ? error.message : "Error"}</div>;
  }
  console.log("questions", questions);
  return (
    <Table
      title={() => (
        <Button
          onClick={() =>
            navigate(
              `/${QUESTIONS_PATHS.QUESTIONS}/${QUESTIONS_PATHS.QUESTIONS_ADD}`,
            )
          }
        >
          {t("dashboard.questions.cta")}
        </Button>
      )}
      bordered
      dataSource={questions}
     
    >
      <Column
        title={t("dashboard.questions.columns.title_en")}
        dataIndex="title_en"
      />
      <Column
        title={t("dashboard.questions.columns.title_ka")}
        dataIndex="title_ka"
      />
      <Column
        title={t("dashboard.questions.columns.category_ka")}
        dataIndex="category_en"
      />
      <Column
        title={t("dashboard.questions.columns.category_ka")}
        dataIndex="category_ka"
      />

      <Column
        title={t("dashboard.questions.columns.actions")}
        render={(_, row) => {
          return (
            <EditOutlined
              className="text-xl text-gray-600 hover:cursor-pointer"
              onClick={() => {
                handleEditClick(row.id);
              }}
            />
          );
        }}
      />
    </Table>
  );
};
export default Questions;
