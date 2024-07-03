import React from "react";
import { CustomAvatar } from "../../customAvatar";

const LeaderColumn = ({name}: {name: string}) => {
  return (
    <div
      style={{
        display: "flex",
        gap: "1rem",
        width: "fit-content",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <CustomAvatar name={name} />
      <p style={{ fontWeight: "700", margin: 0 }}>{name}</p>
    </div>
  );
};

export default LeaderColumn;
