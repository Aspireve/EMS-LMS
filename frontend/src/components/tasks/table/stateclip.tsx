import { Button, Dropdown } from "antd";
import { MenuProps } from "antd/lib";
import React from "react";

const StateClip = ({ text }: { text: "high" | "medium" | "low" }) => {
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
          High
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
          Medium
        </div>
      ),
    },
    {
      key: "3",
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
          Low
        </div>
      ),
    },
  ];

  const color = {
    high: { color: "#ff0000", backgroundColor: "#fec9cb" },
    medium: { color: "#594b03", backgroundColor: "#ffe561" },
    low: { color: "#054c18", backgroundColor: "#c0facf" },
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
      </Button>
    </Dropdown>
  );
};

export default StateClip;
