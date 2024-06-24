import { useOne } from "@refinedev/core";
import PosterImage from "../../components/blogs/posterImage";
import TagBlogs from "./tags";
import Tags from "../../components/blogs/tags";
import BlogTag from "../../components/skeleton/blog-tag";
import BlogHeading from "../../components/skeleton/blog-headings";
import BlogTextSkeleton from "../../components/skeleton/blog-text-skelleton";
import BlogTextHeading from "../../components/skeleton/blog-textheading";
import BlogDetails from "../../components/blogs/blogDetails";
import BlogImageCaption from "../../components/blogs/blogImageCaption";
import { useLocation, useParams } from "react-router-dom";

const FullPageBlog = () => {

  const location = useLocation()
  const parts = location.pathname.split("/")
  const id = parts[parts.length - 1]

  const { data: blogData, isLoading: isBlogLoading } = useOne({
    resource: `v1/blogs/getBlog?id=${id}`,
    id: undefined,
    queryOptions: {
      enabled: true,
    },
  });

  console.log(blogData)
  return (
    <div style={{ width: "80%", margin: "auto" }}>
      <PosterImage poster={blogData?.blog.poster} />
      <div style={{ width: "80%", margin: "auto" }}>
        <div
          style={{
            display: "flex",
            gap: "1rem",
            margin: "1rem auto 0 auto",
            width: "fit-content",
          }}
        >
          <BlogTag isLoading={isBlogLoading} tags={blogData?.blog.tags}/>
        </div>
        <BlogHeading isLoading={isBlogLoading} heading={blogData?.blog.title}/>
        <BlogDetails isLoading={isBlogLoading} author={blogData?.blog.author.name} createdAt={blogData?.blog.createdAt}/>
        {
          blogData?.blog.content.map((content) => {
            if(content.type === "heading") return <BlogTextHeading isLoading={isBlogLoading} heading={content.content}/>
            else if(content.type === "paragraph") return <BlogTextSkeleton isLoading={isBlogLoading} paragraaph={content.content}/>
            else if(content.type === "image") return <BlogImageCaption isLoading={isBlogLoading} image={content.content.url} caption={content.content.caption}/>

          })
        }
{/* 

        <BlogTextHeading isLoading={isBlogLoading} />
        <BlogTextSkeleton isLoading={isBlogLoading} />
        <BlogTextSkeleton isLoading={isBlogLoading} />

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Est eligendi
          suscipit autem voluptatum. Amet, doloremque aut explicabo maiores ipsa
          unde vel, minus vero debitis veniam alias similique facilis excepturi
          pariatur, harum reprehenderit? Cumque quasi corporis nam quos velit
          quibusdam nobis cum facere! Aliquam, cumque consequatur ea vel
          consequuntur facere alias neque, nemo dolorem molestias similique.
        </p>
        <div style={{ margin: "2rem 0" }}>
          <img
            src="https://images.pexels.com/photos/19419467/pexels-photo-19419467/free-photo-of-a-laptop-on-a-table.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            style={{ width: "100%", maxHeight: "50vh", objectFit: "cover" }}
          />
          <p style={{ textAlign: "center", color: "#555" }}>
            This is about the image
          </p>
        </div> */}
      </div>
    </div>
  );
};

export default FullPageBlog;
