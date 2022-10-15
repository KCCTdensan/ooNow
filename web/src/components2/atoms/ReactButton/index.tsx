import { FC } from "react"
import { css, useTheme } from "@emotion/react"

export type UIButtonProps = {
  text: string
  handler?: React.MouseEventHandler<HTMLButtonElement>
  active?: boolean
  submit?: boolean
}

const UIButton: FC<UIButtonProps> = ({ text, handler, active, submit }) => {
  const theme = useTheme()

  return (
    <button
      type={submit ? "submit" : "button"}
      css={css`
      height: 2.5rem;
      margin: 0 0.5rem;
      padding: 0.4rem 1.2rem;
      background: ${active ? theme.bgDim : theme.fgDim};
      color: ${active ? theme.fgDim : theme.fg};

      font-weight: 500;
      cursor: pointer;
      &:hover {
        background: #ffb35c;
        transition: all 0.4s ease;
      };
      `}
      onClick={handler}>
      {text}
    </button>
  )
}

export default UIButton
