import { useRouter } from "next/router"
import { useRecoilState } from "recoil"

import { SingleBoxLayout, userProfileState } from "@kcctdensan/oonow-libs/next"
import RegisterForm from "components/organisms/RegisterForm"

const Register: FC = () => {
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
      <RegisterForm userInit={user} onSuccess={onSuccess} />
    </SingleBoxLayout>
  )
}

export default Register
