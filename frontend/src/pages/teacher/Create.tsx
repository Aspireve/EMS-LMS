import React from "react";
import { Button, Form, Input } from "antd";
import { useCreate } from "@refinedev/core";
import { useNavigate } from "react-router-dom";

const layout = {
  vertical: true,
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

const Create: React.FC = () => {
  const [form] = Form.useForm();

  const { mutate } = useCreate();
  const navigate = useNavigate();

  const onFinish = async (values: any) => {
    mutate(
      {
        resource: "v1/course/createCourse",
        values: { title: values.title },
        successNotification: (data, _, __) => {
          return {
            message: `${data?.title} Created Successfully`,
            description: `Course Created Successfully`,
            type: "success",
          };
        },
        errorNotification: (data, _, __) => {
          console.log(data);
          return {
            message: `Error: ${data?.message}`,
            description: `Error Creating Course`,
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
      <h1 style={{ fontWeight: "700" }}>Name your course</h1>
      <p>
        What would you like to name this course? Dont worry you can change it
        later{" "}
      </p>
      <Form.Item
        name="title"
        label="Course Title"
        rules={[
          {
            required: true,
            message: "You need to enter the title of the course",
          },
        ]}
        style={{ fontWeight: "700" }}
      >
        <Input placeholder="Enter Course Name" />
      </Form.Item>
      <p>What will you teach in this course?</p>
      <Form.Item>
        <Button
          type="primary"
          htmlType="submit"
          style={{ backgroundColor: "#000" }}
        >
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default Create;
