import { FC } from "react"

type StatusBannerProps = {
  vals: { text: string; val: any }[]
}

const StatusBanner: FC<StatusBannerProps> = ({ vals }) => (
  <div>
    {vals.map(({ text, val }, i) => (
      <div key={i}>
        {text}: {val}
      </div>
    ))}
  </div>
)

export default StatusBanner
