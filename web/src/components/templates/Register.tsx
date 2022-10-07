import { useRouter } from "next/router"

import { SingleBoxFrame, Footer } from "@kcctdensan/oonow-libs/next"
import RegisterForm from "components/organisms/RegisterForm"

const Register: FC = () => {
  const router = useRouter()
  const { user, to } = router.query

  const onSuccess = user => {
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
