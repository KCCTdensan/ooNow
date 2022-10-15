import { useRouter } from "next/router"
import { useRecoilState } from "recoil"

import { PostLayout, userProfileState } from "@kcctdensan/oonow-libs/next"
import PostForm from "components/organisms/PostForm"
import Header from 

const Register: FC = () => {
  const [postContent, setPostContent] = useRecoilState(userProfileState)

  const router = useRouter()
  const { oonow, to } = router.query

  const onSuccess = oonow => {
    setPostContent(oonow)
    if (to) {
      router.replace(to)
    } else {
      // どこやろ
      router.replace("/profile")
    }
  }

  return (
    <PostLayout>
      <PostForm postInit={oonow} onSuccess={onSuccess} />
    </PostLayout>
  )
}

export default Register
