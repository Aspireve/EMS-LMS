import { Skeleton } from "antd";
import { formatDate } from "../../utilities/formatDate";
import { useNavigate } from "react-router-dom";
import Tags from "./tags";

type HeadingBlogProps = {
  isloading: boolean;
  poster?: string;
  title?: string;
  tags?: string[];
  content?: {
    type?: string;
    content?: string | { url?: string; caption?: string };
  }[];
  author?: { name?: string };
  createdAt?: string;
  _id?: string;
};

const HeadingBlog = ({
  isloading = false,
  poster,
  title,
  content,
  author,
  createdAt,
  _id: id,
  tags,
}: HeadingBlogProps) => {
  const navigate = useNavigate();
  const description = isloading
    ? "Loading"
    : content?.map((data) => {
        if (data.type !== "image") return data.content;
      });
  return (
    <div
      style={{
        position: "relative",
        marginBottom: "10rem",
        boxShadow: "0 0 10px 0 rgba(0,0,0,0.1)",
        cursor: "pointer",
      }}
      onClick={() => navigate(`./${id}`)}
    >
      <img
        src={poster}
        style={{
          width: "100%",
          aspectRatio: "16/9",
          borderRadius: "0.5rem",
          maxHeight: "50vh",
          objectFit: "cover",
        }}
      />
      <div
        style={{
          backgroundColor: "white",
          padding: "1rem",
          maxWidth: "30vw",
          position: "absolute",
          bottom: "-30%",
          left: "10%",
          borderRadius: "0.5rem",
        }}
      >
        <Skeleton loading={isloading} active style={{ minWidth: "40vh" }}>
          <div style={{ display: "flex", gap: "1rem" }}>
            {tags?.map((tag: string) => (
              <Tags tag={tag} />
            ))}
          </div>

          <h1 style={{ fontWeight: "700" }}>{title}</h1>

          <p style={{ fontWeight: "500" }}>
            {isloading ? description : description?.join(" ").substring(0, 75)}
          </p>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              fontWeight: "500",
              color: "#888",
              gap: "2rem",
            }}
          >
            <p>{author?.name}</p>
            <p>{formatDate(createdAt || "")}</p>
          </div>
        </Skeleton>
      </div>
    </div>
  );
};

export default HeadingBlog;
