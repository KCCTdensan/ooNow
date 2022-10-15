import { FC, useEffect, useState } from "react"
import { css } from "@emotion/react"
import { useRecoilValue } from "recoil"
import { useForm, SubmitHandler } from "react-hook-form"

import {
  UIButton,
  NowButton,
  Choice,
  ButtonLink,
  FormError,
  FormErrorSuggest,
  NowForm,
  userProfileState,
} from "@kcctdensan/oonow-libs/next"

export type PostFormInputs = {
  category: string
  content: string
}

type PostFormProps = {
  content: string
  category: string
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
  const user = useRecoilValue(userProfileState)
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    setError,
    clearErrors,
  } = useForm<PostFormInputs>()

  const onSubmit = async ({ content, category }) => {

    const data = {
      content: content,
      date: new Date(),
      public: Boolean,
      authorId: user?.id,
      category: category,
    }

    console.log(data)

    const res = await fetch("/api/posts/create", {
      method: "POST",
      body: JSON.stringify(data),
    })

    console.log(res.status)
    console.log(await res.json())

    if (!res.ok) {
      if (res.status === 400) {
        console.error("invalid request")
      } else {
        setError("content", {
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
          <NowButton text='遊び' handler={setValue("category", "play")} />
          <NowButton text='食事' handler={setValue("category", "dish")} />
          <NowButton text='睡眠' handler={setValue("category", "sleep")} />
          <NowButton text='勉強・仕事' handler={setValue("category", "work")} />
        </div>
        <NowForm
          name='content'
          cols='20'
          rows='5'
          autoFocus='true'
          placeholder='いましていること'
          register={register}
        />
        <div
          css={css`
            margin-top: 80px;
            margin-left: 40px;
        `}
        />
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
