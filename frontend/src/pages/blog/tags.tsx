import Searchbar from "../../components/blogs/searchbar";
import BlogMenu from "../../components/blogs/blogMenu";
import BlogCards from "../../components/blogs/blogcards";
import PaginationComponent from "../../components/blogs/paginationcomponent";
import { useList } from "@refinedev/core";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export type BlogType = {
  poster: string;
  tags: string[];
  title: string;
  author: { name: string };
  createdAt: string;
  content: {
    type: string;
    content: string | { url: string; caption: string };
  }[];
  _id: string;
};

const TagBlogs = () => {
  const [current, setCurrent] = useState(1);
  const isLoading = false;
  const navigate = useNavigate();

  const location = useLocation()
  const parts = location.pathname.split("/")
  console.log(parts)

  const {
    data: blogList,
    isLoading: isListLoading,
    isError: isListError,
  } = useList({
    resource: "v1/blogs/tags",
    pagination: { pageSize: 12, current },
    filters: [
      {
        field: "tag",
        operator: "contains",
        value: parts[2].toUpperCase() || "",
      }
    ]
  });

  const onSearch = (searchtag: string | null) => {
    navigate(`/blog/search?s=${searchtag}`);
  };

  return (
    <div style={{ width: "80%", margin: "auto" }}>
      <h1
        style={{
          fontSize: "2.5rem",
          fontWeight: "700",
          margin: "1rem 0 ",
          width: "70%",
          lineHeight: "2.9rem",
        }}
      >
        Stay tuned for our new articles and read our new ones
      </h1>
      <BlogMenu isLoading={isLoading} />
      <Searchbar isLoading={isLoading} search={onSearch} />
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gridTemplateRows: "1",
          gap: "2rem",
          maxWidth: "100%",
        }}
      >
        {isListLoading ? (
          <BlogCards isLoading={isListLoading} />
        ) : (
          blogList?.data.filteredBlogs.map((blog: BlogType) => (
            <BlogCards isLoading={isListLoading} {...blog} />
          ))
        )}
      </div>
      <PaginationComponent
        isLoading={isListLoading}
        current={current}
        total={blogList?.data.count || 0}
        setCurrent={setCurrent}
      />
    </div>
  );
};

export default TagBlogs;
