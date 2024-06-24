type BlogImageCaptionProps = {
  isLoading: boolean;
  image?: string;
  caption?: string;
};

const BlogImageCaption = ({
  isLoading,
  image,
  caption,
}: BlogImageCaptionProps) => {
  if (isLoading) return <></>;
  return (
    <div style={{ margin: "2rem 0" }}>
      <img
        src={image}
        style={{ width: "100%", maxHeight: "50vh", objectFit: "cover", borderRadius: "0.5rem", boxShadow: "0 0 5px #000"}}
      />
      {caption && (
        <p style={{ textAlign: "center", color: "#555" }}>{caption}</p>
      )}
    </div>
  );
};

export default BlogImageCaption;
