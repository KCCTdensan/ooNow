import { FC } from "react"
import { css, useTheme } from "@emotion/react"

import Icon from "components/atoms/Icon"
import UIButton from "components/atoms/UIButton"
import ButtonLink from "components/molecules/ButtonLink"

type User = {
  screen: string
  nick: string
  iconUrl: string
  isPublic: boolean
  created: Date
  friends: number
  followers: number
}
type MyProfileHeaderProps = {
  user: User //
}

/*
const user = {
    screen: "huhyuuuuu",
    nick: "俺",
    iconUrl: "https://www.dyama.net/icon.png",
    isPublic: false,
    created: new Date(Date.now() - 1000),
    friends: 100,
    followers: 100,
}
*/

const MyProfileHeader: FC<MyProfileHeaderProps> = ({ user }) => {
  const theme = useTheme()

  return (
    <>
      <div
        css={css`
      display: flex;
      width: 75px;
      height: 75px;
      `}>
        <Icon iconUrl={user.iconUrl} />
        <div
          css={css`
            display: flex;
            justify-content: flex-end;
            margin-left: 674px;
            height: 150%;
          `}>
          <ButtonLink text='編集' to='/profile/edit' />
        </div>
      </div>
      <div
        css={css`
                font-weight: bold;
                color: ${theme.fg} ;
                height: 10px;
            `}>
        {user.nick + " " + "@" + user.screen + (user.isPublic ? 1 : 0)}
      </div>
      <div
        css={css`
          display: flex;
          width: 300px;
          height: 25px;
        `}>
        <p
          css={css`
            color: ${theme.fgSub};
            font-size: 0.8em;
          `}>
          {"友邦: " + user.friends + " " + "同盟: " + user.followers}
        </p>
      </div>
      <div
        css={css`
          display: flex;
          width: 500px;
          height: 10px;
        `}>
        <p
          css={css`
            color: ${theme.fgPsc};
            font-size: 0.6em;
          `}>
          {"作成日: " + user.created}
        </p>
      </div>
    </>
  )
}

export default MyProfileHeader
