import React from "react"
import { css } from "@emotion/react"

type Props = {
  iconUrl: string
  big?: boolean
  medium?: boolean
  small?: boolean
}

const Icon: React.FC<Props> = ({ iconUrl, big, medium, small }) => {
  const size = (big, medium, small) =>
    big ? "12rem" : medium ? "8rem" : small ? "3rem" : "100%"
  return (
    <img
      css={css`
        display: flex;
        border: 3px;
        border-radius: 50%;
        width: ${size(big, medium, small)};
        height: ${size(big, medium, small)};
      `}
      src={iconUrl}
      alt='Icon'
    />
  )
}

export default Icon
