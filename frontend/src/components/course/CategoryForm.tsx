import { EditOutlined } from "@ant-design/icons";
import { useUpdate } from "@refinedev/core";
import { Button, Form } from "antd";
import { useState } from "react";
import { Dropdown } from "antd";

type FormComponentsProps = {
  id: string;
  data: string | undefined;
  isEditing: boolean;
  isLoading: boolean;
  setIsEditing: (type: boolean) => void;
};

const CategoryForm = ({
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
      values: { category: values },
    });
    toggleEdit();
    window.location.reload();
  };

  const items = [
    {
      key: 1,
      label: <div onClick={() => onFinish("Training")}>Training</div>,
    },
    {
      key: 2,
      label: <div onClick={() => onFinish("Certification")}>Certification</div>,
    },
    {
      key: 3,
      label: <div onClick={() => onFinish("Compliance")}>Compliance</div>,
    },
  ];

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
        <h2>Course Category</h2>
        <Button
          type="text"
          icon={<EditOutlined />}
          disabled={isEditing}
          onClick={toggleEdit}
        >
          Edit Category
        </Button>
      </div>
      {editForm ? (
        <Dropdown
          placement="top"
          menu={{ items, selectable: true, defaultSelectedKeys: ["1"] }}
        >
          <Button style={{ width: "100%" }} onClick={(e) => console.log(e)}>
            Select category
          </Button>
        </Dropdown>
      ) : (
        <p>{isLoading ? "Loading..." : data ? data : "No Category Selected"}</p>
      )}
    </div>
  );
};

export default CategoryForm;
