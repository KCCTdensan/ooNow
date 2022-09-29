import { FC } from "react"
import { css } from "@emotion/react"
import { useForm, SubmitHandler } from "react-hook-form"
import { useSWR } from "swr"

import {
  RegisterFormHead,
  RegisterFormBody,
  RegisterFormInputs,
} from "@kcctdensan/oonow-libs/next"
import ServiceInfo from "components/organisms/ServiceInfo"

// 元はlibsにあるやつ
const RegisterForm: FC = () => {
  const { register, handleSubmit, formState, setError } =
    useForm<RegisterFormInputs>()
  const onSubmit = async ({ username, email, password }) => {
    const res = await fetch("/api/users/create", {
      method: "POST",
      body: JSON.stringify({
        screen: username,
        email,
        password,
      }),
    })

    if (!res.ok) {
      if (res.status === 400) {
        setError("invalid request")
      } else {
        setError("server error")
      }
    }
  }

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
