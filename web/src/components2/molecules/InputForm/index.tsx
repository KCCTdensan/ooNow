import { FC } from "react"
import { css } from "@emotion/react"

type InputFormProps = {}

const InputForm: FC<InputFormProps> = ({
  name,
  label,
  type,
  placeholder,
  register,
  opts,
}) => {
  return (
    <div
      css={css`
        display: flex;
        width: 100%;
        flex-direction: column;
      `}>
      <label
        css={css`
          font-size: 15px;
          font-weight: 600;
          margin-bottom: 3px;
        `}>
        {label}
      </label>
      <input
        css={css`
          border: 1px solid gray;
          padding: 20px;
          border-radius: 4px;
        `}
        type={type}
        placeholder={placeholder}
        {...register(name, opts)}
      />
    </div>
  )
}

export default InputForm
