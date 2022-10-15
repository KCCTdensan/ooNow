import { FC, forwardRef } from "react"

import Link from "components2/atoms/Link"
import UIButton from "components2/atoms/UIButton"

type ButtonLinkProps = {
  text: string
  to?: any
  strong?: boolean
}

const ButtonLink: FC<ButtonLinkProps> = ({ text, to, strong }) => {
  const Button = forwardRef(({ text, strong, onClick }, ref) => (
    <UIButton ref={ref} text={text} handler={onClick} strong={strong} />
  ))

  return (
    <Link to={to} noa>
      <Button text={text} strong={strong} />
    </Link>
  )
}

export default ButtonLink
