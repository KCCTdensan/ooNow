import { FC } from "react"
import useSWR from "swr"

import { Profile } from "@kcctdensan/oonow-libs/next"
import fetcher from "libs/fetcher"

type RemoteProfileProps = {
  screen: string
}

const RemoteProfile: FC<RemoteProfileProps> = ({ screen }) => {
  const { data } = useSWR(`/api/users/profile/${screen}`, fetcher)

  return (
    <Profile user={data} />
  )
}

export default RemoteProfile
