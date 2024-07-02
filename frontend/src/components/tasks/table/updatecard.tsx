import React from "react";
import { CustomAvatar } from "../../customAvatar";
import { ArrowRightOutlined, DownloadOutlined, FileOutlined } from "@ant-design/icons";
import { Button } from "antd";

const UpdateCard = () => {
  return (
    <div
      style={{
        width: "100%",
        border: "1px solid",
        borderColor: "#d9d9d9",
        borderRadius: "1rem",
        padding: "0.7rem",
        marginBottom: "1rem",
      }}
    >
      <h3>Refactor Code</h3>
      <div style={{ display: "flex", gap: "0.5rem" }}>
        <CustomAvatar name="Lorem Ipsum" />
        <p style={{ color: "#777", fontWeight: "600" }}>Lorem Ipsum</p>
      </div>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, eos.
      </p>
      <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
        <p
          style={{
            backgroundColor: "#fd5c6355",
            border: "1px solid",
            borderColor: "#7C0A02",
            padding: "0.25rem 0.5rem",
            borderRadius: "0.5rem",
            margin: 0,
          }}
        >
          Backlog
        </p>
        <ArrowRightOutlined />
        <p
          style={{
            backgroundColor: "#41f06f55",
            border: "1px solid",
            borderColor: "#024a15",
            padding: "0.25rem 0.5rem",
            borderRadius: "0.5rem",
            margin: 0,
          }}
        >
          Completed
        </p>
      </div>
      <div
        style={{
          backgroundColor: "#fff",
          display: "flex",
          alignItems: "center",
          padding: "0.5rem",
          borderRadius: "0.5rem",
          marginTop: "1rem",
          justifyContent: "space-between",
          border: "1px solid",
          borderColor: "#d9d9d9",
        }}
      >
        <div
          style={{
            display: "flex",
            gap: ".5rem",
          }}
        >
          <FileOutlined style={{ fontSize: "1rem" }} />
          <p style={{ margin: "0" }}>My Supporting File</p>
        </div>
        <Button
          type="text"
          icon={<DownloadOutlined />}
          size={"middle"}
          onClick={() => console.log("lol")}
        />
      </div>
    </div>
  );
};

export default UpdateCard;
