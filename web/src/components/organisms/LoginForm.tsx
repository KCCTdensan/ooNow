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
  LoginFormInputs,
} from "@kcctdensan/oonow-libs/next"
import ServiceInfo from "components/organisms/ServiceInfo"

type LoginFormProps = {
  userInit?: string
  onSuccess?: any
}

// 元はlibsにあるやつ
const LoginForm: FC<LoginFormProps> = ({
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
  } = useForm<LoginFormInputs>()

  const onSubmit = async ({ username, email, password }) => {
    const res = await fetch("/api/bff/login", {
      method: "POST",
      body: JSON.stringify({
        screen: username,
        email,
        passRaw: password,
      }),
    })

    if (!res.ok) {
      if (res.status == 400) {
        setError("invalid request")
      } else {
        setError("server error")
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
      if (!res.ok) {
        setError("username", {
          type: "notfound",
          message: "このIDは登録されていません",
        })
        return
      }
      clearErrors("username")
    }
  }

  useEffect(() => {
    setValue("username", userInit)
  }, [])

  return (
    <>
      <BrandTitle text='ログイン' />
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
          {errors.username?.type === "notfound" && (
            <FormErrorSuggest
              msg='アカウントを作成しますか？'
              text='サインアップ'
              to={`/register?user=${user}`}
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
          <UIButton text='ログイン' strong submit />
        </div>
      </form>
    </>
  )
}

export default LoginForm
