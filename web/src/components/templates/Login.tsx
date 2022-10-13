import { useRouter } from "next/router"
import { useRecoilState } from "recoil"

import { SingleBoxLayout, userProfileState } from "@kcctdensan/oonow-libs/next"
import LoginForm from "components/organisms/LoginForm"

const Login: FC = () => {
  const [userProfile, setUserProfile] = useRecoilState(userProfileState)

  const router = useRouter()
  const { user, to } = router.query

  const onSuccess = user => {
    setUserProfile(user)
    if (to) {
      router.replace(to)
    } else {
      router.replace("/profile")
    }
  }

  return (
    <SingleBoxLayout>
      <LoginForm userInit={user} onSuccess={onSuccess} />
    </SingleBoxLayout>
  )
}

export default Login
