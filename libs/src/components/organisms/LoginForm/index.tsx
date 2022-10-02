import React, { FC, useState } from "react"
import { css } from "@emotion/react"
import { useForm, SubmitHandler } from "react-hook-form"
import UIButton from "components/atoms/UIButton"
import Logo from "components/atoms/Logo"

type FormInputs = {}

type LoginFormProps = {
  onSubmit?: SubmitHandler<FormInputs>
}

const LoginForm: FC<LoginFormProps> = ({ onSubmit = () => {} }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInputs>()

  return (
    <>
      <div css={
        css`
          background: rgb(255,76,0);
          background: linear-gradient(
            90deg,
            rgba(255,76,0,1) 0%,
            rgba(255,128,0,1) 50%,
            rgba(255,192,0,1) 100%);
          overflow-y: hidden;
        `
      }>
        <div css={
          css`
            height: 100vh;
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
          `
        }>
          <form css={
            css`
            background-color: white;
            width: 70%;
            max-width: 450px;
            padding: 30px;
            border-radius: 10px;
            border: 1px solid #dfdfdf;
            box-shadow: 25px 31px 29px -11px #b35f00;
            border-radius: 10px;
          `
          } onSubmit={handleSubmit(onSubmit)}>
            <h1 css={
              css`
                text-align: center;
              `
            }>
              <Logo />
              {"ログイン"}
            </h1>
            <hr />
            <div css={
              css`
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: space-evenly;
                height: 400px;
              `
            }>
              <div css={
                css`
                display: flex;
                flex-direction: column;
                width: 100%;
              `
              }>
                <label css={
                  css`
                  font-size: 15px;
                  font-weight: 600;
                  margin-bottom: 3px;
                `
                }>ユーザー名</label>
                <input
                  css={
                    css`
                    border: 1px solid gray;
                    padding: 20px;
                    border-radius: 4px;
                  `
                  }
                  type='text'
                  placeholder='ユーザー名'
                  defaultValue=''
                  {...register("username", {})}
                />
              </div>
              {errors.usrename && (
                <p css={
                  css`
                  color: red;
                  margin: 0;
                  align-self: flex-start;
                `
                }>{errors.username.message}</p>
              )}
              <div css={css`
                        display: flex;
                        flex-direction: column;
                        width: 100%;
                      `}>
                <label css={
                  css`
                  font-size: 15px;
                  font-weight: 600;
                  margin-bottom: 3px;
                `
                }>メールアドレス</label>
                <input
                  css={
                    css`
                      border: 1px solid gray;
                      padding: 20px;
                      border-radius: 4px;
                    `
                  }
                  type='email'
                  placeholder='メールアドレス'
                  defaultValue=''
                  {...register("email", {})}
                />
              </div>
              {errors.email && (
                <p css={
                  css`
                  color: red;
                  margin: 0;
                  align-self: flex-start;
                `
                }>{errors.email.message}</p>
              )}
              <div css={
                css`
                  display: flex;
                  flex-direction: column;
                  width: 100%;
                `
              }>
                <label css={
                  css`
                    font-size: 15px;
                    font-weight: 600;
                    margin-bottom: 3px;
                  `
                }>パスワード</label>
                <input
                  css={
                    css`
                      border: 1px solid gray;
                      padding: 20px;
                      border-radius: 4px;
                    `
                  }
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
                <p css={
                  css`
                  color: red;
                  margin: 0;
                  align-self: flex-start;
                `
                }>{errors.password.message}</p>
              )}
              <UIButton text={"ログイン"} strong />
            </div>
          </form>
        </div>
      </div>
    </>
  )
}


export default LoginForm
