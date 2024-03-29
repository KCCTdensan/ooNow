import { FC } from "react"
import { css, useTheme } from "@emotion/react"

export type UIButtonProps = {
  text: string
  handler?: React.MouseEventHandler<HTMLButtonElement>
  strong?: boolean
  submit?: boolean
}

const UIButton: FC<UIButtonProps> = ({ text, handler, strong, submit }) => {
  const theme = useTheme()

  return (
    <button
      type={submit ? "submit" : "button"}
      css={css`
        padding: 0.4rem 1.2rem;
        background: ${strong ? theme.bgInv : theme.bg};
        color: ${strong ? theme.fgInv : theme.fg};
        border: ${theme.border.hosoi} solid ${theme.fg};
        border-radius: ${theme.round.normal};
        font-weight: ${strong ? "700" : "500"};
        cursor: pointer;
        &:hover {
          background: ${strong ? "#FFA500" : "#FFD07F"};
          transition: all .4s ease;};  
      `}
      onClick={handler}>
      {text}
    </button>
  )
}

export default UIButton
