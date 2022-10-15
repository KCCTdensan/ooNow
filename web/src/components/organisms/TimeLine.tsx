import { FC } from "react"
import { css } from "@emotion/react"

import PostList from "components/molecules/PostList"
import ButtonLink from "@kcctdensan/oonow-libs/next"

const MyProfile: FC = () => {
  // get posts
  const user = {
    screen: "huhyuuuuu",
    nick: "俺かも",
    iconUrl: "https://www.dyama.net/icon.png",
    isPublic: false,
    created: new Date(Date.now() - 1000),
    friends: 100,
    followers: 100,
  }
  const posts = [
    { user, time: new Date(), content: "hogehoge" },
    { user, time: new Date(), content: "fugafuga" },
    { user, time: new Date(), content: "piyopiyo" },
    { user, time: new Date(), content: "hogehoge" },
    { user, time: new Date(), content: "fugafuga" },
    { user, time: new Date(), content: "piyopiyo" },
    { user, time: new Date(), content: "hogehoge" },
    { user, time: new Date(), content: "fugafuga" },
    { user, time: new Date(), content: "piyopiyo" },
    { user, time: new Date(), content: "hogehoge" },
    { user, time: new Date(), content: "fugafuga" },
    { user, time: new Date(), content: "piyopiyo" },
  ]

  return (
    <>
      <div
        css={css`
          position: fixed;
          top: 10px;
          left: 50px;
          width: 20rem;
          height: 30rem;
        `}>
        <ButtonLink text='投稿' to='/post' strong={false} />
      </div>
      <div css={css`margin: 1rem 0;`}>
        <PostList posts={posts} />
      </div>
    </>
  )
}

export default MyProfile
