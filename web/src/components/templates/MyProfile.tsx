import { FC } from "react"
import { useRecoilValue } from "recoil"

import {
  Profile,
  CommonLayout,
  userProfileState,
} from "@kcctdensan/oonow-libs/next"

const MyProfile: FC = () => {
  const userProfile = useRecoilValue(userProfileState)
  // 無かったらsomething

  return (
    <CommonLayout>
      <Profile user={userProfile} />
    </CommonLayout>
  )
}

export default MyProfile
