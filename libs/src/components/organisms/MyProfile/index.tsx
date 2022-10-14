import { FC } from "react"
import { css } from "@emotion/react"

import MyProfileHeader from "components/molecules/MyProfileHeader"
import PostList from "components/molecules/PostList"

const MyProfile: FC = () => {
  // get posts
  const user = {
    screen: "huhyuuuuu",
    nick: "俺",
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
  ]

  return (
    <>
      <MyProfileHeader user={user} />
      <div css={css`margin: 4rem 0;`}>
        <PostList posts={posts} />
      </div>
    </>
  )
}

export default MyProfile
