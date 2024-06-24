import { Button, Layout, Space, Tooltip } from "antd";
import {
  BellOutlined,
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
      </Space>
    </Layout.Header>
  );
};

export default Header;
