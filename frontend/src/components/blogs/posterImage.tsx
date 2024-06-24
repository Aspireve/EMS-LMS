import React from "react";

const PosterImage = ({ poster }: { poster: string }) => {
  if (!poster)
    return (
      <div
        style={{
          width: "100%",
          aspectRatio: "16/9",
          borderRadius: "0.5rem",
          maxHeight: "35vh",
          boxShadow: "0 0 7px 0 rgba(0,0,0,0.4)",
          objectFit: "cover",
          backgroundColor: "#aaa",
        }}
      ></div>
    );
  return (
    <img
      src={poster}
      style={{
        width: "100%",
        aspectRatio: "16/9",
        borderRadius: "0.5rem",
        maxHeight: "35vh",
        boxShadow: "0 0 7px 0 rgba(0,0,0,0.4)",
        objectFit: "cover",
      }}
    />
  );
};

export default PosterImage;
