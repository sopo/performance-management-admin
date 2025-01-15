import { QuestionInsert } from "@/interfaces/types";
import { Button, Form, FormInstance, Input } from "antd";
import TextArea from "antd/es/input/TextArea";
import { Trans, useTranslation } from "react-i18next";

const { Item } = Form;

interface questionFormProps {
  initialValues?: QuestionInsert;
  onSubmit: (values:QuestionInsert) => void;
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
        label={t("dashboard.questions.form.question_en")}
        name="title_en"
        rules={[
          {
            required: true,
            message: <Trans>dashboard.questions.form.required</Trans>,
          },
        ]}
      >
        <TextArea placeholder={t("dashboard.questions.form.question_en")} />
      </Item>
      <Item
        label={t("dashboard.questions.form.question_ka")}
        name="title_ka"
        rules={[
          {
            required: true,
            message: <Trans>dashboard.questions.form.required</Trans>,
          },
        ]}
      >
        <TextArea placeholder={t("dashboard.questions.form.question_ka")} />
      </Item>

      <Item
        label={t("dashboard.questions.form.category_en")}
        name="category_en"
        rules={[
          {
            required: true,
            message: <Trans>dashboard.questions.form.required</Trans>,
          },
        ]}
      >
        <Input placeholder={t("dashboard.questions.form.category_en")} />
      </Item>
      

      <Item
        label={t("dashboard.questions.form.category_ka")}
        name="category_ka"
        rules={[
          {
            required: true,
            message: <Trans>dashboard.questions.form.required</Trans>,
          },
        ]}
      >
        <Input placeholder={t("dashboard.questions.form.category_ka")} />
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
