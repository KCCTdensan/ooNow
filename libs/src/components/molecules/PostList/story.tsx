import PostList from "."

export default {
  title: "Molecules / PostList",
  component: PostList,
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

const posts = [
  { user, time: new Date(), content: "ほげほげなう" },
  { user, time: new Date(), content: "ふがふがなう" },
  { user, time: new Date(), content: "ぴよぴよなう" },
]

export const Story = () => {
  return <PostList posts={posts} />
}
