import { FC } from "react"
import { css } from "@emotion/css"
import {
  hosoi,
  round,
  colorBg,
  colorFg,
} from "styles/variables"

type UIButtonProps = {
  text: string
  handler: React.MouseEventHandler<HTMLButtonElement>
  dark?: boolean
  strong?: boolean
}

const UIButton: FC<UIButtonProps> = ({ text, handler, dark = false, strong }) => {
  return (
    <button
      className={css`
        padding: 0.4rem 1.2rem;
        background: ${strong ? colorBg(!dark) : colorBg(dark)};
        color: ${strong ? colorFg(!dark) : colorFg(dark)};
        border: ${hosoi} solid ${colorFg(dark)};
        border-radius: ${round};
        font-weight: ${strong ? "700" : "500"};
      `}
      onClick={handler}>
      {text}
    </button>
  )
}

export default UIButton
