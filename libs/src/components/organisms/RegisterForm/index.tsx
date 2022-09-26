import React, { FC, useState } from "react"
import { css } from "@emotion/react"
import { useForm, SubmitHandler } from "react-hook-form"
import UIButton from "components/atoms/UIButton"
import Logo from "components/atoms/Logo"

type FormInputs = {}

type RegisterFormProps = {
  onSubmit?: SubmitHandler<FormInputs>
  ServiceInfo?: ReactNode
}

const RegisterForm: FC<RegisterFormProps> = ({
  onSubmit = () => {},
  ServiceInfo,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInputs>()

  return (
    <>
      <div css={styles.body}>
        <div css={styles.formContainer}>
          <form css={styles.form} onSubmit={handleSubmit(onSubmit)}>
            <h1 css={styles.h1}>
              <Logo />
              {"サインアップ"}
            </h1>
            {ServiceInfo && <ServiceInfo />}
            <hr />
            <div css={styles.uiForm}>
              <div css={styles.formField}>
                <label css={styles.formFieldLabel}>ユーザー名</label>
                <input
                  css={styles.formFieldInput}
                  type='text'
                  placeholder='ユーザー名'
                  defaultValue=''
                  {...register("username", {})}
                />
              </div>
              {errors.username && (
                <p css={styles.errorMsg}>{errors.username.message}</p>
              )}
              <div css={styles.formField}>
                <label css={styles.formFieldLabel}>メールアドレス</label>
                <input
                  css={styles.formFieldInput}
                  type='email'
                  placeholder='メールアドレス'
                  defaultValue=''
                  {...register("email", {})}
                />
              </div>
              {errors.email && (
                <p css={styles.errorMsg}>{errors.email.message}</p>
              )}
              <div css={styles.formField}>
                <label css={styles.formFieldLabel}>パスワード</label>
                <input
                  css={styles.formFieldInput}
                  type='password'
                  placeholder='パスワード'
                  defaultValue=''
                  {...register("password", {
                    minLength: {
                      value: 8,
                      message: "8文字以上のパスワードを入力してください",
                    },
                    required: {
                      value: true,
                      message: "有効なパスワードを入力してください",
                    },
                  })}
                />
              </div>
              {errors.password && (
                <p css={styles.errorMsg}>{errors.password.message}</p>
              )}
              <UIButton text={"サインアップ"} strong submit />
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

//css

const styles = {
  formContainer: css`
    height: 100vh;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  `,
  form: css`
    background-color: white;
    width: 70%;
    max-width: 450px;
    padding: 30px;
    border-radius: 10px;
    border: 1px solid #dfdfdf;
    box-shadow: 25px 31px 29px -11px #b35f00;
    border-radius: 10px;
  `,
  uiForm: css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    height: 400px;
  `,
  formField: css`
    display: flex;
    flex-direction: column;
    width: 100%;
  `,
  formFieldInput: css`
    border: 1px solid gray;
    padding: 20px;
    border-radius: 4px;
  `,
  formFieldLabel: css`
    font-size: 15px;
    font-weight: 600;
    margin-bottom: 3px;
  `,
  errorMsg: css`
    color: red;
    margin: 0;
    align-self: flex-start;
  `,
  msgOk: css`
    color: green;
    margin-top: 15px;
  `,
  button: css`
    background-color: #ff6518;
    width: 100%;
   margin-top: 10px;
    border: none;
    border-radius: 5px;
    padding: 10px 30px;
    color: white;
    font-size: 15px;
    cursor: pointer;
    transition: all 0.2s;
    &:hover {
      background-color: #ff5500;
    }
  `,
  h1: css`
    text-align: center;
  `,
  body: css`
    background: rgb(255,76,0);
    background: linear-gradient(
      90deg,
      rgba(255,76,0,1) 0%,
      rgba(255,128,0,1) 50%,
      rgba(255,192,0,1) 100%);
    overflow-y: hidden;
  `,
}

export default RegisterForm
