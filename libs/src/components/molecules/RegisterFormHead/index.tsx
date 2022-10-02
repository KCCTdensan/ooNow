import { FC } from "react"
import { css } from "@emotion/react"

import Logo from "components/atoms/Logo"

type RegisterFormHeadProps = {}

const RegisterFormHead: FC<RegisterFormHeadProps> = () => {
  return (
    <h1
      css={css`
        text-align: center;
      `}
    >
      <Logo />
      {"サインアップ"}
    </h1>
  )
}

export default RegisterFormHead
