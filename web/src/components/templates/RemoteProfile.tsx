import { FC } from "react"
import useSWR from "swr"

import { Profile, CommonLayout } from "@kcctdensan/oonow-libs/next"
import fetcher from "libs/fetcher"

type RemoteProfileProps = {
  screen: string
}

const RemoteProfile: FC<RemoteProfileProps> = ({ screen }) => {
  const { data } = useSWR(`/api/users/profile/${screen}`, fetcher)

  return (
    <CommonLayout>
      <Profile user={data} />
    </CommonLayout>
  )
}

export default RemoteProfile
