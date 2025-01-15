import { RegisterProps } from "@/interfaces/interfaces";
import { Button, Form, FormInstance, Input } from "antd";
import { Trans, useTranslation } from "react-i18next";

const { Item } = Form;

interface EditUserFormProps {
  initialValues?: RegisterProps;
  onSubmit: (values: RegisterProps) => void;
  form: FormInstance;
}

const EditUserForm: React.FC<EditUserFormProps> = ({
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
      {" "}
      <Item
        label={t("dashboard.users.form.full_name_en")}
        name="display_name_en"
        rules={[
          {
            required: true,
            message: <Trans>dashboard.users.form.required</Trans>,
          },
        ]}
      >
        <Input placeholder={t("dashboard.users.form.full_name_en")} />
      </Item>
      <Item
        label={t("dashboard.users.form.full_name_ka")}
        name="display_name_ka"
        rules={[
          {
            required: true,
            message: <Trans>dashboard.users.form.required</Trans>,
          },
        ]}
      >
        <Input placeholder={t("dashboard.users.form.full_name_ka")} />
      </Item>
      <Item
        label={t("dashboard.users.form.position_en")}
        name="position_en"
        rules={[
          {
            required: true,
            message: <Trans>dashboard.users.form.required</Trans>,
          },
        ]}
      >
        <Input placeholder={t("dashboard.users.form.position_en")} />
      </Item>
      <Item
        label={t("dashboard.users.form.position_ka")}
        name="position_ka"
        rules={[
          {
            required: true,
            message: <Trans>dashboard.users.form.required</Trans>,
          },
        ]}
      >
        <Input placeholder={t("dashboard.users.form.position_ka")} />
      </Item>
      <Item
        label={t("email")}
        name="email"
        rules={[
          {
            required: true,
            message: <Trans>dashboard.users.form.required</Trans>,
          },
        ]}
      >
        <Input placeholder={t("email")} />
      </Item>
      <Item
        label={t("dashboard.users.form.password")}
        name="password"
        rules={[
          {
            required: true,
            message: <Trans>dashboard.users.form.required</Trans>,
          },
        ]}
      >
        <Input placeholder={t("dashboard.users.form.password")} />
      </Item>
      <Item label={null}>
        <Button type="primary" htmlType="submit" block>
          {t("dashboard.users.form.cta")}
        </Button>
      </Item>
    </Form>
  );
};

export default EditUserForm;
