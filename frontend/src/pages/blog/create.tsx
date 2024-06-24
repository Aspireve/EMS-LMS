import React from "react";
import { Button, Form, Input } from "antd";
import { useCreate, useGetIdentity } from "@refinedev/core";
import { useNavigate } from "react-router-dom";

const layout = {
  vertical: true,
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

const CreateBlog: React.FC = () => {
  const [form] = Form.useForm();

  const { mutate } = useCreate();
  const navigate = useNavigate();

  const data = useGetIdentity()
  console.log(data.data)

  const onFinish = async (values: any) => {
    mutate(
      {
        resource: "v1/blogs/insertBlog",
        values: { title: values.title, author: data.data.id },
        successNotification: (data, _, __) => {
          return {
            message: `${data?.title} Created Successfully`,
            description: `Blog Created Successfully`,
            type: "success",
          };
        },
        errorNotification: (data, _, __) => {
          console.log(data);
          return {
            message: `Error: ${data?.message}`,
            description: `Error Creating Blog`,
            type: "error",
          };
        },
      },
      {
        onError: (error, variables, context) =>
          console.log(error, variables, context),
        onSuccess: (data, variables, context) => {
          navigate(`./${data?._id}`);
        },
      }
    );
  };

  return (
    <Form
      {...layout}
      layout="vertical"
      form={form}
      name="control-hooks"
      onFinish={onFinish}
      style={{ maxWidth: 600 }}
    >
      <h1 style={{ fontWeight: "700" }}>Write your Blog</h1>
      <p>
        What would you like your readers to see? Dont worry you can change it
        later
      </p>
      <Form.Item
        name="title"
        label="Blog Title"
        rules={[
          {
            required: true,
            message: "You need to enter the title of the blog",
          },
        ]}
        style={{ fontWeight: "700" }}
      >
        <Input placeholder="Enter Blog Title" />
      </Form.Item>
      <p>Why would you want others to click your blog?</p>
      <Form.Item>
        <Button
          type="primary"
          htmlType="submit"
          style={{ backgroundColor: "#000" }}
        >
          Create
        </Button>
      </Form.Item>
    </Form>
  );
};

export default CreateBlog;
