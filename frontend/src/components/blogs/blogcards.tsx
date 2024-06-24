import { Card, Skeleton } from "antd";
import { formatDate } from "../../utilities/formatDate";
import { Link, useNavigate } from "react-router-dom";
import Tags from "./tags";

type BlogCardsProps = {
  isLoading: boolean;
  poster?: string;
  tags?: string[];
  title?: string;
  author?: { name?: string };
  createdAt?: string;
  content?: {
    type?: string;
    content?: string | { url?: string; caption?: string };
  }[];
  _id?: string;
};

const BlogCards = ({
  isLoading = false,
  tags,
  title,
  author,
  createdAt,
  poster,
  content,
  _id: id,
}: BlogCardsProps) => {
  const naviagate = useNavigate()
  const description = isLoading
    ? "Loading"
    : content?.map((data) => {
        if (data.type !== "image") return data.content;
      });
  return (
    <Card
      hoverable
      style={{ width: "100%" }}
      cover={
        poster ?
        <img
          alt={isLoading ? "Loading" : title}
          src={isLoading ? "#000" : poster}
          style={{ height: "10rem", objectFit: "cover" }}
        /> : <div
        style={{height: "10rem", width: "100%", backgroundColor: '#aaa'}}></div>
      }
      onClick={() => isLoading ? null : naviagate(`./${id}`)}
    >
      <Skeleton loading={isLoading} active style={{ width: "100%" }}>
        <div style={{ display: "flex", gap: "1rem" }}>
          {!isLoading &&
            tags.map((tag: string) => (
              <Tags tag={tag} />
            ))}
        </div>
        <h2 style={{ fontWeight: "700", lineHeight: "1.4rem" }}>{title}</h2>
        <p>
          {isLoading ? description : description?.join(" ").substring(0, 75)}
        </p>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontWeight: "500",
            color: "#888",
          }}
        >
          <p>{isLoading ? "Loading..." : author?.name}</p>
          <p>{formatDate(createdAt || "")}</p>
        </div>
      </Skeleton>
    </Card>
  );
};

export default BlogCards;
