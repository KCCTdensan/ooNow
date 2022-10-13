import { FC } from "react"
import { css } from "@emotion/react"

import { date2str } from "libs/fmt"

// import type { User } from ""
import User from "components/molecules/User"

type Post = {
  user: User
  time: Date
  content?: string
}

type PostProps = {
  post: Post
}

const Post: FC<PostProps> = ({ post: { user, time, content } }) => {
  return (
    <div
      css={css`
        display: flex;
      `}>
      <User user={user} />
      <div
        css={css`
          display: flex;
          flex-grow: 1;
        `}>
        {/* Reactions */}
      </div>
      <span
        css={css`
        `}>
        {date2str(time)}
      </span>
    </div>
  )
}

export default Post
