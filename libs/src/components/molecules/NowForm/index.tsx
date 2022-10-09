import { FC } from "react"
import { css } from "@emotion/react"

type NowFormProps = {}

const NowForm: FC<NowFormProps> = ({
  name,
  type,
  cols,
  rows,
  autoFocus,
  placeholder,
  register,
  opts,
}) => {
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
          border-radius: 1em;
          resize: none;
        `}
        cols={cols}
        rows={rows}
        autoFocus={autoFocus}
        type={type}
        placeholder={placeholder}
        {...register(name, opts)}
      />
    </div>
  )
}

export default NowForm
