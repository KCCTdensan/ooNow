import Post from "."

export default {
  title: "Molecules / Post",
  component: Post,
}

const user = {
  screen: "huhyuuuuu",
  nick: "俺",
  iconUrl: "https://www.dyama.net/icon.png",
  isPublic: false,
  created: new Date(Date.now() - 1000),
  friends: 100,
  followers: 100,
}

const post = { user, time: new Date(), content: "ほげほげなう" }

export const Story = () => {
  return <Post post={post} />
}
