import { FC } from "react"
import { css, useTheme } from "@emotion/react"

import IconLink from "components/molecules/IconLink"

type UserProps = {
  user: UserProfile
  to?: string
}

const User: FC<UserProps> = ({
  user: { screen, nick, iconUrl, isPublic, created, friends, followers },
  to,
}) => {
  const theme = useTheme()

  return (
    <div
      css={css`
        display: flex;
        align-items: center;
      `}>
      <div
        css={css`
          width: 3rem;
          height: 3rem;
          margin-right: 0.7rem;
        `}>
        <IconLink to={to} iconUrl={iconUrl} />
      </div>
      <div>
        <strong>
          {nick} @{screen}
        </strong>
        <p css={css`margin: 0;`}>hello!</p>
      </div>
    </div>
  )
}

export default User
