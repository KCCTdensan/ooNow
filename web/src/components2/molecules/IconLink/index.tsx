import { FC, forwardRef } from "react"

import Icon from "components2/atoms/Icon"
import Link from "components2/atoms/Link"

type IconLinkProps = {
  iconUrl: string
  to?: string
}

const IconLink: FC<IconLinkProps> = ({ iconUrl, to }) => {
  const IconRef = forwardRef(({ iconUrl }, ref) => (
    <Icon ref={ref} iconUrl={iconUrl} />
  ))

  return (
    <Link to={to} noa>
      <IconRef iconUrl={iconUrl} />
    </Link>
  )
}

export default IconLink
