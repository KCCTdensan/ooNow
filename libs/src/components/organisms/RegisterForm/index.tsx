import { FC } from "react"
import { css } from "@emotion/react"

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
      <BrandTitle text='サインアップ' />
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
          <UIButton text='サインアップ' strong submit />
        </div>
      </form>
    </>
  )
}

export default RegisterForm
