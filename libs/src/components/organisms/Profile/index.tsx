import React from "react"
import { css } from "@emotion/react"

import UIButton from "components/atoms/UIButton"
import Icon from "components/atoms/Icon"
import TimeLine from "components/organisms/TimeLine"

const user = {
  screen: "huhyuuuuu",
  nick: "俺",
  iconUrl: "https://www.dyama.net/icon.png",
  isPublic: false,
  created: new Date(Date.now() - 1000),
  friends: 100,
  followers: 100,
}

const Profile = () => {
  return (
    <div
      css={css`
            margin-left: 100px;
            margin-right: 100px;
        `}>
      <p css={{ fontSize: "2rem", color: "red" }}>
        current user: {JSON.stringify(userProfile)}
      </p>
      <div
        css={css`
            display: flex;
            width: 45px;
            height: 45px;
        `}>
        <Icon iconUrl='../../../../images/sample.png' />
      </div>
      <div
        css={css`
            font-weight: bold;
            `}>
        UserName
      </div>
      <div>
        <p>ProfileText</p>

        <UIButton text='Follow'></UIButton>
      </div>

      <div
        css={css`
            margin-top: 100px;
            margin-bottom: 40px;
            `}>
        <TimeLine />
      </div>
    </div>
  )
}

export default Profile
