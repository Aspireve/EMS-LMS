import { CloudFilled, EditOutlined } from "@ant-design/icons";
import { useUpdate } from "@refinedev/core";
import { Button, Form, Input } from "antd";
import TextArea from "antd/es/input/TextArea";
import React, { useState } from "react";
import FileUpload from "./FileUpload";
import { uploadFileToCloudinary } from "../../utilities/uploadCloudinary";

type FormComponentsProps = {
  id: string;
  data: string | undefined;
  isEditing: boolean;
  isLoading: boolean;
  setIsEditing: (type: boolean) => void;
};

const CourseImageForm = ({
  id,
  data,
  isEditing,
  isLoading,
  setIsEditing,
}: FormComponentsProps) => {
  const [form] = Form.useForm();
  console.log("image date", data)
  const { mutate, isLoading: isUpdating } = useUpdate();
  const [uploading, setUploading] = useState(false)

  const [editForm, setEditForm] = useState(false);

  const toggleEdit = () => {
    setIsEditing(!isEditing);
    setEditForm(!editForm);
  };

  const uploadFile = (info: any) => {
    console.log(info)
  };

  const onFinish = async (values: any) => {
    setUploading(true)
    const fileUrl = await uploadFileToCloudinary(values.image.file)
    // console.log(values);
    await mutate({
      resource: "v1/course/updateCourse",
      id,
      values: {image: fileUrl},
    });
    toggleEdit();
    setUploading(false)
    window.location.reload();
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
        <h2>Course Image</h2>
        <Button
          type="text"
          icon={<EditOutlined />}
          disabled={isEditing}
          onClick={toggleEdit}
        >
          Edit Image
        </Button>
      </div>
      {editForm ? (
        <Form form={form} name="control-hooks" onFinish={onFinish}>
          <Form.Item
            name="image"
            label=""
            rules={[
              {
                required: true,
                message: "You need to enter the image of the course",
              },
            ]}
          >
            <FileUpload
              name="file"
              multiple={false}
              onChange={uploadFile}
              onDrop={uploadFile}
            />
          </Form.Item>
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              style={{ backgroundColor: "#000" }}
              disabled={isUpdating || uploading}
            >
              Submit
            </Button>
            <Button
              type="text"
              onClick={toggleEdit}
              style={{ marginLeft: "1rem" }}
              disabled={isUpdating || uploading}
            >
              Cancel
            </Button>
          </Form.Item>
        </Form>
      ) : (
        <p>
          {isLoading ? "Loading..." : data ? <img style={{
            width: "100%",
            aspectRatio: "16/9",
            borderRadius: "0.5rem",
            backgroundSize: "cover"
          }} src={data} alt="Course Thumbnail"/> : "No Description Provided"}
        </p>
      )}
    </div>
  );
};

export default CourseImageForm;
