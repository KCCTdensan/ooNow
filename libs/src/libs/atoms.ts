import { atom } from "recoil"
import { recoilPersist } from "recoil-persist"

const { persistAtom } = recoilPersist()

type UserProfile = any

export const userProfileState = atom<UserProfile | null>({
  key: "userProfile",
  default: null,
  effects: [persistAtom],
})
