import React from "react";
import UpdateCard from "./updatecard";
import Filter from "./filtertags";

function LatestUpdates() {
  return (
    <div
      style={{
        width: "30%",
        backgroundColor: "#fff",
        borderRadius: "1rem",
        padding: "1rem",
        maxHeight: "calc(100vh - 3rem)",
        overflowY: "scroll",
        scrollbarWidth: "none",
        msOverflowStyle: "none",
      }}
    >
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <h1
          style={{
            fontSize: "1.5rem",
            fontWeight: "700",
          }}
        >
          Latest Updates
        </h1>
        <Filter />
      </div>

      <UpdateCard />
      <UpdateCard />
      <UpdateCard />
    </div>
  );
}

export default LatestUpdates;
