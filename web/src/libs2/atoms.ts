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

export const loginState = atom<boolean>({
  key: "loggedIn",
  default: false,
  effects: [persistAtom],
})

export const userProfileState = atom<UserProfile | null>({
  key: "userProfile",
  default: null,
  effects: [persistAtom],
})
