import { Skeleton } from "antd";
import React from "react";

const BlogTextSkeleton = ({ isLoading, paragraaph }: {isLoading: boolean, paragraaph: string}) => {
  if (isLoading) return <Skeleton active />;
  return (
    <p>
      {paragraaph}
    </p>
  );
};

export default BlogTextSkeleton;
