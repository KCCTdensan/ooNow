import { FC } from "react"
import { css, useTheme } from "@emotion/react"

import Icon from "components2/atoms/Icon"

export type UserProps = {
  user: UserProfile
}

// 主にFF一覧とかそういうとこで表示される予定のやつ
const User: FC<UserProps> = ({
  user: { screen, nick, iconUrl, isPublic, created, friends, followers },
}) => {
  const theme = useTheme()

  return (
    <div
      css={css`
        display: flex;
        align-items: center;
      `}>
      <div css={css`margin-right: 0.7rem;`}>
        <Icon iconUrl={iconUrl} small />
      </div>
      <div
        css={css`
          color: ${theme.fg};
        `}>
        <strong>
          {nick} @{screen}
        </strong>
        <p css={css`margin: 0;`}>hello!</p>
      </div>
    </div>
  )
}

export default User
