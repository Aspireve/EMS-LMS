import { Skeleton } from "antd";
import React from "react";

const Tags = ({tag, isLoading}: {tag?: string, isLoading?: boolean}) => {
  if(isLoading) 
    return<Skeleton.Button active={true} size={"default"} shape={"round"} block={false} />
  return (
    <p
      style={{
        color: "#00308F",
        backgroundColor: "#F0F8FF",
        padding: "0.2rem 0.5rem",
        fontSize: "0.8rem",
        borderColor: "#F0F8FF",
        borderRadius: "0.5rem",
        border: "1px solid"
      }}
    >
      {tag}
    </p>
  );
};

export default Tags;
