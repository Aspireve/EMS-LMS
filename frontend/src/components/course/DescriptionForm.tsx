import { EditOutlined } from "@ant-design/icons";
import { useUpdate } from "@refinedev/core";
import { Button, Form, Input } from "antd";
import TextArea from "antd/es/input/TextArea";
import React, { useState } from "react";

type FormComponentsProps = {
  id: string;
  data: string | undefined;
  isEditing: boolean;
  isLoading: boolean;
  setIsEditing: (type: boolean) => void;
};

const DescriptionForm = ({
  id,
  data,
  isEditing,
  isLoading,
  setIsEditing,
}: FormComponentsProps) => {
  const [form] = Form.useForm();
  const { mutate, isLoading: isUpdating } = useUpdate();

  const [editForm, setEditForm] = useState(false);

  const toggleEdit = () => {
    setIsEditing(!isEditing);
    setEditForm(!editForm);
  };

  const onFinish = async (values: any) => {
    console.log(values);
    await mutate({
      resource: "v1/course/updateCourse",
      id,
      values,
    });
    toggleEdit();
    window.location.reload()
  };

  return (
    <div
      style={{
        marginTop: "1rem",
        backgroundColor: "#d0f0fe",
        padding: "1rem",
        borderRadius: "1rem",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          alignContent: "center",
        }}
      >
        <h2>Course Description</h2>
        <Button
          type="text"
          icon={<EditOutlined />}
          disabled={isEditing}
          onClick={toggleEdit}
        >
          Edit Description
        </Button>
      </div>
      {editForm ? (
        <Form form={form} name="control-hooks" onFinish={onFinish}>
          <Form.Item
            name="description"
            label=""
            rules={[
              {
                required: true,
                message: "You need to enter the description of the course",
              },
            ]}
          >
            <TextArea rows={4} placeholder="Enter Description"/>
          </Form.Item>
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              style={{ backgroundColor: "#000" }}
              disabled={isUpdating}
            >
              Submit
            </Button>
            <Button
              type="text"
              onClick={toggleEdit}
              style={{ marginLeft: "1rem" }}
              disabled={isUpdating}
            >
              Cancel
            </Button>
          </Form.Item>
        </Form>
      ) : (
        <p>{isLoading ? "Loading..." : data ? data : "No Description Provided"}</p>
      )}
    </div>
  );
};

export default DescriptionForm;
