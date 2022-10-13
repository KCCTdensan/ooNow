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
      padding: 0.4rem 1.2rem;
      font-size: 1rem;
      background: ${active ? theme.bgDim : theme.fgDim};
      color: ${active ? theme.fgDim : theme.fg};
      border: ${theme.border.totemohosoi} solid ${
        active ? theme.bgDim : theme.fgDim
      };
      border-radius: ${theme.round.normal};
      font-weight: 500;
      cursor: pointer;
      &:hover {
        background: #ffb35c;
        border: ${theme.border.totemohosoi} solid #ff9924;
      transition: all .4s ease;
      };
      `}
      onClick={handler}>
      {text}
    </button>
  )
}

export default UIButton
