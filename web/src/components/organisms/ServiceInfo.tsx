import useSWR from "swr"
import fetcher from "libs/fetcher"

import { StatusBanner } from "@kcctdensan/oonow-libs/next"

// 登録画面とかに出すやつ
const ServiceInfo = () => {
  const { data: ucnt } = useSWR("/api/users/count", fetcher)

  return (
    <StatusBanner vals={[{ text: "現在の登録ユーザー数", val: ucnt?.value }]} />
  )
}

export default ServiceInfo
