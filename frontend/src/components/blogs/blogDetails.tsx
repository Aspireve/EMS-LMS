import { Skeleton } from "antd";
import React from "react";
import { formatDate } from "../../utilities/formatDate";

type BlogDetailsProps = {
    isLoading: boolean,
    author?: string,
    createdAt?: string
}

const BlogDetails = ({ isLoading, author, createdAt }: BlogDetailsProps) => {
    if(isLoading) return (
        <div
      style={{
        display: "flex",
        fontWeight: "500",
        color: "#888",
        width: "fit-content",
        gap: "1rem",
        margin: "auto",
      }}
    >
        <Skeleton.Button active size={"small"} />
        <Skeleton.Button active size={"small"} />
    </div>
    )
  return (
    <div
      style={{
        display: "flex",
        fontWeight: "500",
        color: "#888",
        width: "fit-content",
        gap: "1rem",
        margin: "auto",
      }}
    >
      <p>By {author}</p>
      <p>{formatDate(createdAt|| "")}</p>
    </div>
  );
};

export default BlogDetails;
