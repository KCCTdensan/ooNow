import { FC, ReactNode } from "react"

type PostLayoutProps = {
  children: ReactNode
}

const PostLayout: FC<PostLayoutProps> = ({ children }) => {
  return (
    <>
      {children}
    </>
  )
}

export default PostLayout
