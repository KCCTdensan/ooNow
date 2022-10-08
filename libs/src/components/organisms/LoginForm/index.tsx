import { FC } from "react"
import { css } from "@emotion/react"
import { useForm, SubmitHandler } from "react-hook-form"

import BrandTitle from "components/molecules/BrandTitle"

export type LoginFormInputs = {
  username: string
  email: string
  password: string
}

type LoginFormProps = {
  onSubmit?: SubmitHandler<FormInputs>
  ServiceInfo?: ReactNode
}

const LoginForm: FC<LoginFormProps> = ({
  register,
  handleSubmit,
  formState,

  onSubmit = () => {},
  ServiceInfo,
}) => {
  return (
    <>
      <BrandTitle text='ログイン' />
      {ServiceInfo && <ServiceInfo />}
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
          />
          {errors.username && <FormError msg={errors.username.message} />}
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
