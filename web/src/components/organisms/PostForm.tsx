import { FC, useEffect, useState } from "react"
import { css } from "@emotion/react"
import { useForm, SubmitHandler } from "react-hook-form"

import {
  UIButton,
  NowButton,
  Choice,
  ButtonLink,
  FormError,
  FormErrorSuggest,
  NowForm,
} from "@kcctdensan/oonow-libs/next"

export type PostFormInputs = {
  category: string
  content: string
}

type PostFormProps = {
  postInit?: string
  onSuccess?: any
}

const PostForm: FC<PostFormProps> = ({
  postInit = "",
  content,
  category,
  onSuccess = () => {},
}) => {
  // RegisterFormを見様見真似で組み変え

  // こ↑こ↓わからん
  const [postContent, setPostContent] = useState(postInit)
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    setError,
    clearErrors,
  } = useForm<PostFormInputs>()

  const onSubmit = async ({ content, category }) => {
    const res = await fetch("/api/bff/post", {
      method: "POST",
      body: JSON.stringify({
        nowContent: content,
        nowCategory: category,
      }),
    })

    if (!res.ok) {
      if (res.status === 400) {
        console.error("invalid request")
      } else {
        setError("submit", {
          type: "service",
          message: "サーバーでエラーが発生しました",
        })
      }
      return
    }

    const ooNow = await res.json()
    onSuccess(ooNow)
  }

  useEffect(() => {
    if (postInit) setValue("postcontent", postInit)
  }, [])

  // 元はlibsにあるやつ

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div
          css={css`
            justify-content: center;
            display: flex;
            margin-bottom: 20px
          `}>
          <NowButton
            text='遊び'
            handler = () => {
              category: 'play'
            }
          />
          <NowButton
            text='食事'
          />
          <NowButton
            text='睡眠'
          />
          <NowButton
            text='勉強・仕事'
          />
        </div>
        <NowForm
          name='content'
          cols='20'
          rows='5'
          autoFocus='true'
          type='content'
          placeholder='いましていること'
          register={register}
        />
        <div
          css={css`
            margin-top: 80px;
            margin-left: 40px;
        `}/>
        <div
          css={css`
            display: flex;
            justify-content: center;
            margin-bottom: 50px;
          `}>
          <UIButton text='なう' strong submit />
          {errors.submit && <FormError msg={errors.submit.message} />}
        </div>
      </form>
    </>
  )
}

export default PostForm

