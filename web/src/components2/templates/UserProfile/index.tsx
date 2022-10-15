import { FC } from "react"
import { css } from "@emotion/react"

import CommonLayout from "components2/layouts/CommonLayout"
import Profile from "components2/organisms/Profile"

const UserProfile: FC = () => {
  return (
    <CommonLayout>
      <Profile user={"asdf"} />
    </CommonLayout>
  )
}

export default UserProfile
