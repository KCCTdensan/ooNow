import { FC } from "react"
import { css } from "@emotion/react"

import CommonLayout from "components/layouts/CommonLayout"
import Profile from "components/organisms/Profile"

const UserProfile: FC = () => {
  return (
    <CommonLayout>
      <Profile user={"asdf"} />
    </CommonLayout>
  )
}

export default UserProfile
