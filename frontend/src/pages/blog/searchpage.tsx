import Searchbar from "../../components/blogs/searchbar";
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

const SearchPage = () => {
  const navigate = useNavigate()
  const location = useLocation();
  const [current, setCurrent] = useState(1);
  const queryParams = new URLSearchParams(location.search);
  const [searchQuery, setSearchQuery] = useState(queryParams.get("s"));

  const onSearch = (searchTerm: string | null) => {
    setSearchQuery(searchTerm);
    navigate(`/blog/search?s=${searchTerm}`);
  };

  const { data: blogList, isLoading: isListLoading } = useList({
    resource: "v1/blogs/search",
    pagination: { mode: "off" },
    filters: [
      {
        field: "s",
        operator: "contains",
        value: searchQuery || "",
      },
    ],
  });

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
        Showing results for {searchQuery}
      </h1>
      <Searchbar isLoading={isListLoading} search={onSearch} />
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
          <>
            <BlogCards isLoading={isListLoading} />
            <BlogCards isLoading={isListLoading} />
            <BlogCards isLoading={isListLoading} />
          </>
        ) : (
          blogList?.data.message.map((blog: BlogType) => (
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

export default SearchPage;
