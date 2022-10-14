import { FC } from "react"
import { css } from "@emotion/react"

import Icon from "components/atoms/Icon"
import UIButton from "components/atoms/UIButton"
import Post from "components/molecules/Post"

type Post = any

type PostListProps = {
  posts: Post[]
}

const PostList: FC<PostListProps> = ({ posts }) => {
  return (
    <div
      css={css`
        display: flex;
        margin: 10px 0;
        padding: 10px;
        flex-direction: column;
      `}>
      {posts.map((post, i) => (
        <Post post={post} key={i} />
      ))}
    </div>
  )
}

export default PostList
