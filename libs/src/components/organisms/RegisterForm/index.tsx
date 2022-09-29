import { FC } from "react"
import { css } from "@emotion/react"
import { useForm, SubmitHandler } from "react-hook-form"

import RegisterFormHead from "components/molecules/RegisterFormHead"
import RegisterFormBody from "components/molecules/RegisterFormBody"

export type RegisterFormInputs = {
  username: string
  email: string
  password: string
}

type RegisterFormProps = {
  onSubmit?: SubmitHandler<FormInputs>
  ServiceInfo?: ReactNode
}

// Next側にこれを別で実装してます
const RegisterForm: FC<RegisterFormProps> = ({
  register,
  handleSubmit,
  formState,

  onSubmit = () => {},
  ServiceInfo,
}) => {
  return (
    <>
      <RegisterFormHead />
      {ServiceInfo && <ServiceInfo />}
      <hr />
      <RegisterFormBody
        onSubmit={handleSubmit(onSubmit)}
        register={register}
        errors={formState.errors}
      />
    </>
  )
}

export default RegisterForm
