import { PlusCircleOutlined } from "@ant-design/icons";
import { Button, Tooltip } from "antd";

const AddDocuments = () => {
  return (
    <Tooltip title="Add Documents">
      <Button
        icon={<PlusCircleOutlined />}
        size="large"
        iconPosition={"start"}
        style={{ backgroundColor: "transparent", padding: "0 0.5rem" }}
      />
    </Tooltip>
  );
};

export default AddDocuments;
