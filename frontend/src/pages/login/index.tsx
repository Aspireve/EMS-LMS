import { AuthPage } from "@refinedev/antd";

export const Login = () => {
  return (
    <AuthPage
      type="login"
      formProps={{
        initialValues: { email: "stev18fernane@gmail.com", password: "1345678" },
      }}
    />
  );
};
