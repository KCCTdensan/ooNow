import { FC, forwardRef } from "react"

import User, { UserProps } from "components2/molecules/User"

type UserLinkProps = UserProps & {
  to: string
}

const UserLink: FC<UserLinkProps> = ({ user, to }) => {
  const LinkRef = forwardRef(({ user }, ref) => <User ref={ref} user={user} />)

  return (
    <Link to={to} noa>
      <UserRef user={user} />
    </Link>
  )
}

export default UserLink
