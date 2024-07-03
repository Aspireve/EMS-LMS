import { DownOutlined } from "@ant-design/icons";
import { Button, Dropdown } from "antd";
import { MenuProps } from "antd/lib";
import React from "react";

const StatusClip = ({ text }: { text: "Backlog" | "To Do" | "In Process" | "Done" }) => {
  const items: MenuProps["items"] = [
    {
      key: "1",
      label: (
        <div
          style={{
            color: "#ff0000",
            padding: "0.25rem 0.5rem",
            borderRadius: "1rem",
            backgroundColor: "#fec9cb",
            textAlign: "center",
            border: "1px solid #ff0000",
          }}
          onClick={() => console.log("High")}
        >
          Backlog
        </div>
      ),
    },
    {
      key: "2",
      label: (
        <div
          style={{
            color: "#594b03",
            padding: "0.25rem 0.5rem",
            borderRadius: "1rem",
            backgroundColor: "#ffe561",
            textAlign: "center",
            border: "1px solid #594b03",
          }}
          onClick={() => console.log("High")}
        >
          To Do
        </div>
      ),
    },
    {
        key: "3",
        label: (
          <div
            style={{
              color: "#594b03",
              padding: "0.25rem 0.5rem",
              borderRadius: "1rem",
              backgroundColor: "#ffe561",
              textAlign: "center",
              border: "1px solid #594b03",
            }}
            onClick={() => console.log("High")}
          >
            In Progress
          </div>
        ),
      },
    {
      key: "4",
      label: (
        <div
          style={{
            color: "#054c18",
            padding: "0.25rem 0.5rem",
            borderRadius: "1rem",
            backgroundColor: "#c0facf",
            textAlign: "center",
            border: "1px solid #054c18",
          }}
          onClick={() => console.log("High")}
        >
          Done
        </div>
      ),
    },
  ];

  const color = {
    Backlog: { color: "#ff0000", backgroundColor: "#fec9cb" },
    "To Do": { color: "#594b03", backgroundColor: "#ffe561" },
    "In Process": { color: "#594b03", backgroundColor: "#ffe561" },
    Done: { color: "#054c18", backgroundColor: "#c0facf" },
  };

  return (
    <Dropdown menu={{ items }} placement="bottom">
      <Button
        style={{
          color: color[text].color,
          padding: "0.25rem 0.5rem",
          borderRadius: "1rem",
          backgroundColor: color[text].backgroundColor,
          textAlign: "center",
          border: `1px solid ${color[text].color}`,
        }}
      >
        {text}
        <DownOutlined />
      </Button>
    </Dropdown>
  );
};

export default StatusClip;
