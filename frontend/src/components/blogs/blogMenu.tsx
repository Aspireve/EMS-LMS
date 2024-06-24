import { Menu, Skeleton } from "antd";
import { MenuProps } from "antd/lib";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const BlogMenu = ({ isLoading = false }) => {
  const navigate = useNavigate()
  type MenuItem = Required<MenuProps>["items"][number];
  const location = useLocation();
  const parts = location.pathname.split("/")
  const [current, setCurrent] = useState("");

  useEffect(() => {
    setCurrent(parts[2] || "")
  }, [parts])


  const onClick = (e: {key: string}) => {
    navigate(`/blog/${e.key}`)
  };

  const items: MenuItem[] = [
    {
      label: "All Topics",
      key: "",
    },
    {
      label: "Announcement",
      key: "announcement",
    },
    {
      label: "Update",
      key: "update",
    },
    {
      label: "Community",
      key: "community",
    },
  ];
  if (isLoading)
    return (
      <div style={{ display: "flex", gap: "1rem" }}>
        <Skeleton.Button active />
        <Skeleton.Button active />
        <Skeleton.Button active />
        <Skeleton.Button active />
      </div>
    );
  return (
    <Menu
      onClick={onClick}
      selectedKeys={[current]}
      mode="horizontal"
      items={items}
      style={{ backgroundColor: "transparent" }}
    />
  );
};

export default BlogMenu;
