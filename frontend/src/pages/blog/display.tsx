import Searchbar from "../../components/blogs/searchbar";
import BlogMenu from "../../components/blogs/blogMenu";
import HeadingBlog from "../../components/blogs/headingBlog";
import BlogCards from "../../components/blogs/blogcards";
import PaginationComponent from "../../components/blogs/paginationcomponent";
import { useList, useOne } from "@refinedev/core";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

export type BlogType =  {
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


const DisplayBlog = () => {
  const navigate = useNavigate()
  const [current, setCurrent] = useState(1);
  const isLoading = false;  

  const {
    data: headingBlog,
    isLoading: isHeadingLoading,
    isError: isHeadingError,
  } = useOne({
    resource: "v1/blogs/getHeaderBlogs",
    id: undefined,
    queryOptions: {
      enabled: true
    }
  });

  const {
    data: blogList,
    isLoading: isListLoading,
    isError: isListError,
  } = useList({
    resource: "v1/blogs/getAllBlogs",
    pagination: { pageSize: 12, current },
    queryOptions: {
      enabled: !!headingBlog
    }
  });

  const onSearch = (searchtag: string | null) => {
    navigate(`/blog/search?s=${searchtag}`);
  }

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
      <Searchbar isLoading={isLoading} search={onSearch}/>
      <HeadingBlog isloading={isHeadingLoading} {...(headingBlog?.headingBlog) }/>
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
          blogList?.data.blogs.map((blog: BlogType) => (
            <BlogCards isLoading={isListLoading} {...blog}/>
          ))
        )}
      </div>
      <PaginationComponent isLoading={isListLoading} current={current} total={blogList?.data.count || 0} setCurrent={setCurrent}/>
    </div>
  );
};

export default DisplayBlog;
