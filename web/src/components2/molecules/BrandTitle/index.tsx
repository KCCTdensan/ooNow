import { FC } from "react"
import { css } from "@emotion/react"

import Logo from "components2/atoms/Logo"

type BrandTitleProps = {
  text: string
}

const BrandTitle: FC<BrandTitleProps> = ({ text }) => {
  return (
    <h1
      css={css`
        text-align: center;
      `}>
      <Logo />
      {text}
    </h1>
  )
}

export default BrandTitle
