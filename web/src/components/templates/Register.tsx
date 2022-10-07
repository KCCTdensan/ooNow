import { useRouter } from "next/router"
import { useRecoilState } from "recoil"

import {
  SingleBoxFrame,
  Footer,
  userProfileState,
} from "@kcctdensan/oonow-libs/next"
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
    <>
      <SingleBoxFrame>
        <RegisterForm userInit={user} onSuccess={onSuccess} />
      </SingleBoxFrame>
      <Footer />
    </>
  )
}

export default Register
