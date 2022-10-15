import React from "react"
import { useForm } from "react-hook-form"

import SingleBoxFrame from "components2/layouts/SingleBoxFrame"
import RegisterForm, {
  RegisterFormInputs,
} from "components2/organisms/RegisterForm"
import Footer from "components2/organisms/Footer"

const Register = () => {
  const { register, handleSubmit, formState } = useForm<RegisterFormInputs>()
  return (
    <>
      <RegisterForm
        register={register}
        handleSubmit={handleSubmit}
        formState={formState}
        onSubmit={console.log}
      />
      <Footer />
    </>
  )
}

export default Register
