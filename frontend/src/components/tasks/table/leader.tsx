import { DownloadOutlined, FileOutlined } from "@ant-design/icons";
import { Button } from "antd";
import React from "react";
import { CustomAvatar } from "../../customAvatar";

const Leader = () => {
  return (
    <div
      style={{
        backgroundColor: "#fff",
        display: "flex",
        alignItems: "center",
        gap: "0.5rem",
        justifyContent: "space-between",
      }}
    >
      <div
        style={{
          display: "flex",
          gap: ".5rem",
        }}
      >
        <CustomAvatar name="Lorem Ipsum" />
        <p style={{ margin: "0" }}>My Supporting File</p>
      </div>
      <p style={{ margin: "0" }}>201</p>
    </div>
  );
};

export default Leader;
