import { FC } from "react"
import { css } from "@emotion/react"

type NowFormProps = {}

const NowForm: FC<NowFormProps> = props => {
  return (
    <div
      css={css`
        display: flex;
        justify-content: center;
        margin-bottom: 50px;
      `}>
      <input
        css={css`
          border: medium solid black;
          border-radius: 0.5rem;
          padding: 0.5rem;
          resize: none;
        `}
        {...props}
      />
    </div>
  )
}

export default NowForm
