import { SearchOutlined } from "@ant-design/icons";
import { Skeleton } from "antd";
import { useRef } from "react";

type SearchBarProps = {
  isLoading?: boolean;
  search: (query: string | null) => void;
};

const Searchbar = ({isLoading= false, search}: SearchBarProps) => {
  const searchRef = useRef<HTMLInputElement>(null)
  if(isLoading) return (
    <Skeleton.Button active={true} size={"default"} shape={'default'} block={true} style={{
      padding: "0.5rem 1rem",
      margin: "1rem auto 2rem auto",
    }} />
  )
  return (
    <div
      style={{
        border: "1px solid black",
        padding: isLoading ? "0 ": "0.5rem 1rem",
        borderRadius: "0.5rem",
        width: "100%",
        margin: "1rem auto 2rem auto",
        display: "flex",
        gap: "1rem",
      }}
    >
      <input
        style={{
          outline: "none",
          border: "none",
          backgroundColor: "transparent",
          width: "100%",
        }}
        ref={searchRef}
        placeholder="Search for blogs"
        type="text"
      />
      <SearchOutlined
        style={{
          fontSize: "1rem",
          fontWeight: "bold",
          cursor:"pointer",
        }}
        onClick={() => search(searchRef.current?.value || "")}
      />
    </div>
  );
};

export default Searchbar;
