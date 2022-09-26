import { useSWR } from "swr"
import { Footer } from "@kcctdensan/oonow-libs/next"
import { RegisterForm } from "@kcctdensan/oonow-libs/next"
import ServiceInfo from "components/organisms/ServiceInfo"

const Register = () => {
  const onSubmit = ({ username, email, password }) => {
    console.log({ username, email, password })
  }

  return (
    <>
      <RegisterForm onSubmit={onSubmit} ServiceInfo={ServiceInfo} />
      <Footer />
    </>
  )
}

export default Register
