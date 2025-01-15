import { QuestionInsert } from "@/interfaces/types";
import { UserAtom } from "@/store/auth";
import { useAtom } from "jotai";
import { useTranslation } from "react-i18next";
import { Navigate, useNavigate } from "react-router-dom";
import { AUTH_PATHS } from "@/pages/authorization-layout/auth.enum";
import useAddQuestion from "@/hooks/use-add-question";
import { QUESTIONS_PATHS } from "../question-routes";
import { useForm } from "antd/es/form/Form";
import QuestionForm from "../components/question-form";

const AddQuestion: React.FC = () => {
  const { t } = useTranslation();
  const [user] = useAtom(UserAtom);
  const [form] = useForm();
  const navigate = useNavigate();
  const { mutate, isLoading, isError, error } = useAddQuestion(() => {
    navigate(`/${QUESTIONS_PATHS.QUESTIONS}/${QUESTIONS_PATHS.QUESTIONS_LIST}`);
  });

  const handleSubmit = (values: QuestionInsert) => {
    mutate(values);
  };

  if (!user) {
    return <Navigate to={AUTH_PATHS.SIGN_IN} />;
  }
  return (
    <div className="flex flex-col gap-10 justify-center items-center mx-auto my-5 md:my-20 w-96">
      <h1 className="text-xl font-semibold text-gray-900">
        {t("dashboard.questions.form.title")}
      </h1>
      {isLoading && <div>Loading...</div>}

      {isError && (
        <div className="text-red-500">
          Error: {error instanceof Error ? error.message : "Unknown error"}
        </div>
      )}

      {!isLoading && !isError && (
        <QuestionForm form={form} onSubmit={handleSubmit} />
      )}
    </div>
  );
};
export default AddQuestion;
