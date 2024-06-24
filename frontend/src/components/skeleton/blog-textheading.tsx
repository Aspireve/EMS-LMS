import { Skeleton } from "antd";
import React from "react";

type BlogTextHeadingProps = {
    isLoading: boolean,
    heading?: string
}

const BlogTextHeading = ({ isLoading, heading }: BlogTextHeadingProps) => {
  if (isLoading) return <Skeleton.Input active size={"large"} block={true} style={{margin: "2rem 0"}}/>;
  return (
    <h3 style={{ fontSize: "1.5rem", fontWeight: "700" }}>
      {heading}
    </h3>
  );
};

export default BlogTextHeading;
