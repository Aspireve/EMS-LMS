import { DownloadOutlined, EditOutlined, FileOutlined } from "@ant-design/icons";
import { useUpdate } from "@refinedev/core";
import { Button, Form, Input } from "antd";
import { useState } from "react";
import FileUpload from "./FileUpload";
import { uploadFileToCloudinary } from "../../utilities/uploadCloudinary";

type FormComponentsProps = {
  id: string;
  data: string[] | undefined;
  isEditing: boolean;
  isLoading: boolean;
  setIsEditing: (type: boolean) => void;
};

const AttachmentsForm = ({
  id,
  data,
  isEditing,
  isLoading,
  setIsEditing,
}: FormComponentsProps) => {
  const [form] = Form.useForm();
  console.log("image date", data);
  const { mutate, isLoading: isUpdating } = useUpdate();
  const [uploading, setUploading] = useState(false);

  const [editForm, setEditForm] = useState(false);

  const toggleEdit = () => {
    setIsEditing(!isEditing);
    setEditForm(!editForm);
  };

  const uploadFile = (info: any) => {
    console.log(info);
  };

  const onFinish = async (values: any) => {
    setUploading(true);
    console.log(values.attachments.fileList);
    const uploadedFiles = await Promise.all(
      values.attachments.fileList.map(async (file: any) => {
        return { name: file.name, url: await uploadFileToCloudinary(file) };
      })
    );
    console.log(uploadedFiles);
    await mutate({
      resource: "v1/course/updateCourse",
      id,
      values: { attachments: uploadedFiles },
    });
    toggleEdit();
    setUploading(false);
    window.location.reload();
  };

  const openFile = (url: string) => {
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer');
    if (newWindow) {
        newWindow.opener = null;
    }
  }

  console.log("data", data);

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
        <h2 style={{margin: 0}}>Course Attachment</h2>
        <Button
          type="text"
          icon={<EditOutlined />}
          disabled={isEditing}
          onClick={toggleEdit}
        >
          Edit Attachments
        </Button>
      </div>
      {editForm ? (
        <Form form={form} name="control-hooks" onFinish={onFinish}>
          <Form.Item
            name="attachments"
            label=""
            rules={[
              {
                required: true,
                message: "You need to enter the Attachemnt of the course",
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
          {isLoading
            ? "Loading..."
            : data && data?.length > 0
            ? data.map((attachment) => {
                return (
                  <div style={{
                    backgroundColor: "#fff",
                    display: "flex",
                    alignItems: "center",
                    padding: "0.5rem",
                    borderRadius: "0.5rem",
                    marginTop: "1rem",
                    justifyContent: "space-between"
                  }}>
                    <div style={{
                        display: "flex",
                        gap: ".5rem",
                    }}>

                    <FileOutlined style={{fontSize: "1rem"}}/>
                    <p style={{margin: "0"}}>{attachment.name}</p>
                    </div>
                    <Button type="text" icon={<DownloadOutlined />} size={"middle"} onClick={() => openFile(attachment.url)}/>
                  </div>
                );
              })
            : "No Course Attachements"}
        </p>
      )}
    </div>
  );
};

export default AttachmentsForm;
