import React from "react"
import NowShow from "."

export default {
  title: "molecules / NowShow",
  component: NowShow,
}

export const NowShows = () => {
  return (
    <NowShow
      size={100}
      name='カテゴリー名'
      nowValue={50}
      wasValue={25}
      age='30代'
      gender='男'
      color='#00ffaa'
    />
  )
}
