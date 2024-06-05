import { Button, Layout, Space, Tooltip } from "antd";
import {
  BellOutlined,
  PoweroffOutlined,
  RetweetOutlined,
} from "@ant-design/icons";
import { CSSProperties } from "react";
import { CurrentUser } from "./currentUser";

const Header = () => {
  const headerStyles: CSSProperties = {
    display: "flex",
    backgroundColor: "#fff",
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "flex-end",
  };

  return (
    <Layout.Header style={headerStyles}>
      <Space
        style={{
          display: "flex",
          gap: "2rem",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Tooltip title="notifications">
          <Button
            shape="circle"
            style={{ backgroundColor: "transparent", border: "none" }}
            size="middle"
            icon={
              <BellOutlined
                style={{
                  fontWeight: "bold",
                  fontSize: "1.5rem",
                  color: "#4c96d9",
                }}
              />
            }
          />
        </Tooltip>
        <CurrentUser />
        <Tooltip title="logout">
          <Button
            shape="circle"
            style={{ backgroundColor: "#e8ecf1" }}
            size="middle"
            icon={<RetweetOutlined style={{ color: "#4c96d9" }} />}
          />
        </Tooltip>
        <Tooltip title="logout">
          <Button
            shape="circle"
            style={{ backgroundColor: "#e8ecf1" }}
            size="middle"
            icon={<PoweroffOutlined style={{ color: "#e45c6c" }} />}
          />
        </Tooltip>
      </Space>
    </Layout.Header>
  );
};

export default Header;
