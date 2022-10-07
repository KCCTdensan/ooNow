import { FC } from "react"
import { useRecoilValue } from "recoil"

import { Profile, userProfileState } from "@kcctdensan/oonow-libs/next"

const MyProfile: FC = () => {
  const userProfile = useRecoilValue(userProfileState)
  console.log(userProfile)

  return (
    <>
    <p css={{ fontSize: "2rem", color: "red" }}>current user: {JSON.stringify(userProfile)}</p>
    <Profile user={userProfile} />
    </>
  )
}

export default MyProfile
