import { QuestionProps } from "@/interfaces/types";
import { Button, Form, FormInstance, Input } from "antd";
import TextArea from "antd/es/input/TextArea";
import { Trans, useTranslation } from "react-i18next";

const { Item } = Form;

interface questionFormProps {
  initialValues?: QuestionProps;
  onSubmit: (values: QuestionProps) => void;
  form: FormInstance;
}

const QuestionForm: React.FC<questionFormProps> = ({
  initialValues,
  onSubmit,
  form,
}) => {
  const { t } = useTranslation();

  return (
    <Form
      name="basic"
      initialValues={initialValues}
      form={form}
      onFinish={onSubmit}
      autoComplete="off"
      layout="vertical"
      className="w-full"
    >
      <Item
        label={t("dashboard.questions.question")}
        name="title"
        rules={[
          {
            required: true,
            message: <Trans>dashboard.questions.form.required</Trans>,
          },
        ]}
      >
        <TextArea placeholder={t("dashboard.questions.question")} />
      </Item>

      <Item
        label={t("dashboard.questions.form.category")}
        name="category"
        rules={[
          {
            required: true,
            message: <Trans>dashboard.questions.form.required</Trans>,
          },
        ]}
      >
        <Input placeholder={t("dashboard.questions.form.category")} />
      </Item>

    

     

      <Item label={null}>
        <Button type="primary" htmlType="submit" block>
          {t("dashboard.questions.form.cta")}
        </Button>
      </Item>
    </Form>
  );
};

export default QuestionForm;
