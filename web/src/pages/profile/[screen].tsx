import { FC } from "react"
import { useRouter } from "next/router"

import RemoteProfile from "components/templates/RemoteProfile"

const UserProfile: FC = () => {
  const router = useRouter()
  const { screen } = router.query

  return (
    <RemoteProfile screen={screen} />
  )
}

export default UserProfile
