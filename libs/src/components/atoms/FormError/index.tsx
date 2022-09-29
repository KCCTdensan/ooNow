import { FC } from "react"
import { css } from "@emotion/react"

type FromErrorProps = {
  msg: string
}

const FormError: FC<FromErrorProps> = ({ msg }) => {
  return (
    <p
      css={css`
        color: red;
        margin: 0;
        align-self: flex-start;
      `}
    >
      {msg}
    </p>
  )
}

export default FormError
