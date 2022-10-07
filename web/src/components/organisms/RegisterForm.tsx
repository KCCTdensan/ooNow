import { FC, useEffect, useState } from "react"
import { css } from "@emotion/react"
import { useForm, SubmitHandler } from "react-hook-form"

import {
  UIButton,
  ButtonLink,
  FormError,
  FormErrorSuggest,
  BrandTitle,
  InputForm,
  RegisterFormInputs,
} from "@kcctdensan/oonow-libs/next"
import ServiceInfo from "components/organisms/ServiceInfo"

type RegisterFormProps = {
  userInit?: string
  onSuccess?: any
}

// 元はlibsにあるやつ
const RegisterForm: FC<RegisterFormProps> = ({
  userInit = "",
  onSuccess = () => {},
}) => {
  const [user, setUser] = useState(userInit)
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    setError,
    clearErrors,
  } = useForm<RegisterFormInputs>()

  const onSubmit = async ({ username, email, password }) => {
    const res = await fetch("/api/bff/register", {
      method: "POST",
      body: JSON.stringify({
        screen: username,
        email,
        passRaw: password,
      }),
    })

    if (!res.ok) {
      if (res.status === 400) {
        console.error("invalid request")
      } else if (res.status === 401) {
        setError("password", {
          type: "auth",
          message: "パスワードが正しくありません",
        })
      } else {
        setError("submit", {
          type: "service",
          message: "サーバーでエラーが発生しました",
        })
      }
      return
    }

    const user = await res.json()
    onSuccess(user)
  }

  const onUsername = async ({
    target: { value },
  }: ChangeEvent<HTMLInputElement>) => {
    setUser(value)
    if (value) {
      const res = await fetch(`/api/users/profile/${value}`)
      if (res.ok) {
        setError("username", {
          type: "exists",
          message: "このIDは既に使用されています",
        })
        return
      }
      clearErrors("username")
    }
  }

  useEffect(() => {
    if (userInit) setValue("username", userInit)
  }, [])

  return (
    <>
      <BrandTitle text='サインアップ' />
      <ServiceInfo />
      <hr />
      <form onSubmit={handleSubmit(onSubmit)}>
        <div
          css={css`
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: space-evenly;
            height: 400px;
          `}>
          <InputForm
            name='username'
            label='ユーザー名'
            placeholder='ユーザー名'
            register={register}
            opts={{ onChange: onUsername }}
          />
          {errors.username && <FormError msg={errors.username.message} />}
          {errors.username?.type === "exists" && (
            <FormErrorSuggest
              msg='あなたのアカウントですか？'
              text='ログイン'
              to={`/login?user=${user}`}
            />
          )}
          <InputForm
            name='email'
            label='メールアドレス'
            type='email'
            placeholder='メールアドレス'
            register={register}
          />
          {errors.email && <FormError msg={errors.email.message} />}
          <InputForm
            name='password'
            label='パスワード'
            type='password'
            placeholder='パスワード'
            register={register}
            opts={{
              minLength: {
                value: 8,
                message: "8文字以上のパスワードを入力してください",
              },
              required: {
                value: true,
                message: "有効なパスワードを入力してください",
              },
            }}
          />
          {errors.password && <FormError msg={errors.password.message} />}
          <UIButton text='サインアップ' strong submit />
          {errors.submit && <FormError msg={errors.submit.message} />}
        </div>
      </form>
    </>
  )
}

export default RegisterForm
