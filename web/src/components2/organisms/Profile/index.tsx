import React from "react"
import { css } from "@emotion/react"

import UIButton from "components2/atoms/UIButton"
import Icon from "components2/atoms/Icon"
import PostList from "components2/molecules/PostList"
import { date2str } from "libs/fmt"
import User from "components2/molecules/User"

// MyProfile写して
const Profile = () => {
  // 取得したやつ
  const user = {
    screen: "huhyuuuuu",
    nick: "俺",
    iconUrl: "https://www.dyama.net/icon.png",
    isPublic: false,
    created: new Date(Date.now() - 1000),
    friends: 100,
    followers: 100,
  }
  const { screen, nick, iconUrl, isPublic, created, friends, followers } = user

  return (
    <div
      css={css`
            display: flex;
            & > img + img {
            margin-left: 2rem;
            };
        `}>
      <Icon iconUrl={iconUrl} medium />
      <div
        css={css`
          width: 100%;
          height: 100%;
          align-items: flex-end;
          `}>
        <div
          css={css`
              font-weight: bold;
              font-size: 3rem;
              `}>
          {nick}
        </div>
        <div
          css={css`
            display: flex;
            & > p{
            margin-right:30px;
            };
            `}>
          <p>フォロー {friends}</p>
          <p>フォロワー {followers}</p>
        </div>
      </div>

      <div
        css={css`
            margin-top: 100px;
            margin-bottom: 40px;
            `}>
        <PostList />
      </div>
    </div>
  )
}

export default Profile
