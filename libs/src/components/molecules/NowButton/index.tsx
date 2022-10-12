import { FC } from "react"
import { css } from "@emotion/react"

import UIButton, { UIButtonProps } from "components/atoms/UIButton"

const NowButton: FC<UIButtonProps> = ({
  props,
}) => {
  return (
    <div
      css={css`
        margin: 0 0.5rem;
      `}>
      <UIButton {...props} />
    </div>
  )
}

export default NowButton
