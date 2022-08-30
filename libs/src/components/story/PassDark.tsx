import { FC, ReactNode, cloneElement } from "react"
import { useDarkMode } from "storybook-dark-mode"

type PassDarkProps = {
  children: ReactNode
}

const PassDark: FC<PassDarkProps> = ({ children }) => {
  const dark = useDarkMode()
  return cloneElement(children, { dark })
}

export default PassDark
