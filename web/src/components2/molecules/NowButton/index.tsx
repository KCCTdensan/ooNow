import { FC } from "react"
import { css } from "@emotion/react"

import UIButton, { UIButtonProps } from "components2/atoms/UIButton"

const NowButton: FC<UIButtonProps> = ({ text }) => {
  return (
    <div
      css={css`
        margin: 0 0.5rem;
      `}>
      <UIButton {...{ text }} />
    </div>
  )
}

export default NowButton
