import Tags from "../blogs/tags";

const BlogTag = ({
  isLoading,
  tags,
}: {
  isLoading: boolean;
  tags?: string[];
}) => {
  if (isLoading)
    return (
      <>
        <Tags isLoading={isLoading} />
        <Tags isLoading={isLoading} />
      </>
    );
  return tags?.map((tag: string) => (
    <Tags tag={tag} />
  ));
};

export default BlogTag;
