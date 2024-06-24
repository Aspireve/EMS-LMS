import { Skeleton } from 'antd'

type BlogHeadingProps = {
    isLoading: boolean
    heading: string
}

const BlogHeading = ({isLoading, heading}: BlogHeadingProps) => {
    if(isLoading) return <Skeleton.Button size='default' active shape={"round"} block={true} style={{margin:"2rem 0"}}/>
  return (
    <h1
    style={{
      maxWidth: "75%",
      margin: "0.8rem auto",
      textAlign: "center",
      fontWeight: "700",
      lineHeight: "2.5rem",
      fontSize: "2.5rem",
    }}
  >
    {heading}
  </h1>
  )
}

export default BlogHeading