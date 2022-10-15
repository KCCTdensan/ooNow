import User from "."
import React from "react"

export default {
  title: "Molecules / User",
  component: User,
}

export const Users = () => {
  const user = {
    screen: "huhyuuuuu",
    nick: "俺",
    iconUrl: "https://www.dyama.net/icon.png",
    isPublic: false,
    created: new Date(Date.now() - 1000),
    friends: 100,
    followers: 100,
  }

  return <User user={user} />
}
