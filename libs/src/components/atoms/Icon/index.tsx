import React from "react"
import { css } from "@emotion/react"

type Props = {
  iconUrl: string
}

const Icon: React.FC<Props> = ({ iconUrl }) => {
  return (
    <img
      css={css`
        border: 3px;
        border-radius: 50%;
        width: 100%;
        height: 100%;
      `}
      src={iconUrl}
      alt='Icon'
    />
  )
}

export default Icon
