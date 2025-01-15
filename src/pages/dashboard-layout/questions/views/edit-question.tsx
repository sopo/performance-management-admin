import { useForm } from "antd/es/form/Form";
import { useAtom } from "jotai";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { QuestionInsert } from "@/interfaces/types";
import { UserAtom } from "@/store/auth";
import QuestionForm from "../components/question-form";
import { AUTH_PATHS } from "@/pages/authorization-layout/auth.enum";

import { QUESTIONS_PATHS } from "../question-routes";
import useEditQuestion from "@/hooks/use-edit-question";
import useGetQuestion from "@/hooks/use-get-question";

const EditQuestion: React.FC = () => {
  const navigate = useNavigate();
  const [user] = useAtom(UserAtom);
  const [form] = useForm();
  const { id } = useParams();

  const {
    mutate,
    isLoading: isquestionLoading,
    isError: isquestionError,
    error: questionError,
  } = useEditQuestion(id, () => {
    navigate(`/${QUESTIONS_PATHS.QUESTIONS}/${QUESTIONS_PATHS.QUESTIONS_LIST}`);
  });
  const { data, isLoading, isError, error } = useGetQuestion({id: id || null});
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error: {error instanceof Error ? error.message : "Error"}</div>;
  }
  if (isquestionLoading) {
    return <div>Loading...</div>;
  }

  if (isquestionError) {
    return (
      <div>
        Error:{" "}
        {questionError instanceof Error ? questionError.message : "Error"}
      </div>
    );
  }

  if (!user) {
    return <Navigate to={AUTH_PATHS.SIGN_IN} />;
  }

  const handleSubmit = (values: QuestionInsert) => {
    if (id) {
      mutate(values);
    } else {
      console.error("undefined id");
    }
  };

  return (
    <div className="flex flex-col gap-10 justify-center items-center mx-auto my-5 md:my-20 w-96">
      <h1 className="text-xl font-semibold text-gray-900">Edit question</h1>

      <QuestionForm
        form={form}
        initialValues={{
          title_en: data?.title_en || "",
          category_en: data?.category_en || "",
          title_ka: data?.title_ka || "",
          category_ka: data?.category_ka || ""
        }}
        onSubmit={handleSubmit}
      />
    </div>
  );
};
export default EditQuestion;
