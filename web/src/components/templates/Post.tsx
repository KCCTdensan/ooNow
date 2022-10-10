import { useRouter } from "next/router"
import { useRecoilState } from "recoil"

import {
  SingleBoxFrame,
  Footer,
  userProfileState,
} from "@kcctdensan/oonow-libs/next"
import PostForm from "components/organisms/PostForm"

const Register: FC = () => {
  const [userProfile, setUserProfile] = useRecoilState(userProfileState)

  const router = useRouter()
  const { oonow, to } = router.query

  const onSuccess = oonow => {
    postContent(oonow)
    if (to) {
      router.replace(to)
    } else {
      // どこやろ
      router.replace("!?!")
    }
  }

  return (
    <>
      <SingleBoxFrame>
        <PostForm userInit={user} onSuccess={onSuccess} />
      </SingleBoxFrame>
      <Footer />
    </>
  )
}

export default Register
