import { useState } from "react";
import { useGetIdentity } from "@refinedev/core";

import { SettingOutlined } from "@ant-design/icons";
import { Button, Popover, Space } from "antd";
import { UserData } from "../../types/user";

import { CustomAvatar } from "../customAvatar";
import { Text } from "../text";
// import { AccountSettings } from "../account-settings";

export const CurrentUser = () => {
  const [opened, setOpened] = useState(false);
  const { data: user } = useGetIdentity<UserData>();

  const content = (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Text strong>{user?.name}</Text>
      <div
        style={{
          borderTop: "1px solid #d9d9d9",
          display: "flex",
          flexDirection: "column",
          gap: "4px",
        }}
      >
        <Button
          style={{ textAlign: "left" }}
          icon={<SettingOutlined />}
          type="text"
          block
          onClick={() => setOpened(true)}
        >
          Account settings
        </Button>
      </div>
    </div>
  );

  return (
    <>
      <Popover
        placement="bottomRight"
        content={content}
        trigger="click"
        overlayInnerStyle={{ padding: 0 }}
        overlayStyle={{ zIndex: 999 }}
      >
        <Space style={{ display: "flex", gap: "1rem", cursor: "pointer" }}>
          <CustomAvatar
            name={user?.name}
            src={user?.picture}
            size="default"
            style={{ cursor: "pointer" }}
          />
          <div style={{ display: "flex", flexDirection: "column" }}>
            <Text size="md" style={{ fontWeight: 600 }}>
              {user?.name}
            </Text>
            <Text
              size="sm"
              style={{ color: "#4c96d9", fontWeight: 500, lineHeight: 1 }}
            >
              {user?.role}
            </Text>
          </div>
        </Space>
      </Popover>
      {/* {user && (
        <AccountSettings
          opened={opened}
          setOpened={setOpened}
          userId={user.id}
        />
      )} */}
    </>
  );
};
