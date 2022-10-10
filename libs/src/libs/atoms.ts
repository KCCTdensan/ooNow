import { atom } from "recoil"
import { recoilPersist } from "recoil-persist"

const { persistAtom } = recoilPersist()

// ref: server/src/users/users.service
type UserProfile = {
  screen: string
  nick?: string
  iconUrl?: string
  isPublic: boolean
  created: Date
  friends: number
  followers: number
}

type PostProfile = {
  screen: string
  nick?: string
  iconUrl?: string
  isPublic: boolean
  created: Date
  friends: number
  followers: number
}

export const userProfileState = atom<UserProfile | null>({
  key: "userProfile",
  default: null,
  effects: [persistAtom],
})

export const postContentState = atom<PostContent | null>({
  key: "postContent",
  default: null,
  effects: [persistAtom],
})
