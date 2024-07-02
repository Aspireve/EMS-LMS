import { FilterOutlined } from "@ant-design/icons";
import { Button, Dropdown, Tooltip, Typography } from "antd";
import { MenuProps } from "antd/lib";

const items: MenuProps["items"] = [
  {
    key: "1",
    label: "Item 1",
  },
  {
    key: "2",
    label: "Item 2",
  },
  {
    key: "3",
    label: "Item 3",
  },
];

const Filter = () => {
  return (
    <Dropdown
      menu={{
        items,
        selectable: true,
        defaultSelectedKeys: ["3"],
      }}
    >
      <Typography.Link>
        <Tooltip title="Filter Tags">
          <Button
            icon={<FilterOutlined />}
            size="large"
            iconPosition={"end"}
            style={{ backgroundColor: "transparent" }}
          />
        </Tooltip>
      </Typography.Link>
    </Dropdown>
  );
};

export default Filter;
