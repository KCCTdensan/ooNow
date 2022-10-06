import { css } from "@emotion/react"
import UIButton from "components/atoms/UIButton"

const NowButton = (props) => {
  return (
    <div css={css`
      margin: 0 0.5rem;
  	`}>
      <UIButton {...props} />
    </div>
  )
}

export default NowButton
