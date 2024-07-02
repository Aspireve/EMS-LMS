import React from "react";
import Leader from "./leader";

const Leaderboard = () => {
  return (
    <div
      style={{
        backgroundColor: "#fff",
        flexGrow: 1,
        borderRadius: "1rem",
        padding: "1rem",
      }}
    >
      <h2>Leaderboard</h2>
      <div
        style={{
          height: "100%",
          overflowY: "scroll",
          display: "flex",
          flexDirection: "column",
          gap: "0.5rem",
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
      >
        <Leader />
        <Leader />
        <Leader />
      </div>
    </div>
  );
};

export default Leaderboard;
