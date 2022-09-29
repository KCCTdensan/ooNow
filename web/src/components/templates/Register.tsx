import { SingleBoxFrame, Footer } from "@kcctdensan/oonow-libs/next"
import RegisterForm from "components/organisms/RegisterForm"

const Register: FC = () => {
  return (
    <>
      <SingleBoxFrame>
        <RegisterForm />
      </SingleBoxFrame>
      <Footer />
    </>
  )
}

export default Register
