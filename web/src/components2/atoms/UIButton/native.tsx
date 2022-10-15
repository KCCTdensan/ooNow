import type { FC } from "react"
import type { UIButtonProps } from "."
import { useTheme } from "@emotion/react"
import { css } from "@emotion/native"
import { Button } from "react-native"

const UIButton: FC<UIButtonProps> = ({ text, handler, strong }) => {
  const theme = useTheme()

  return (
    <Button
      style={css`
        padding: 0.4rem 1.2rem;
        background: ${strong ? theme.bgInv : theme.bg};
        color: ${strong ? theme.fgInv : theme.fg};
        border: ${theme.border.hosoi} solid ${theme.fg};
        border-radius: ${theme.round.normal};
        font-weight: ${strong ? "700" : "500"};
      `}
      title={text}
    />
  )
}

export default UIButton
