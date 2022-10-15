import { FC } from "react"
import { css } from "@emotion/react"
import { useForm, SubmitHandler } from "react-hook-form"

import FloatFrame from "components2/layouts/FloatFrame"
import UIButton from "components2/atoms/UIButton"
import NowButton from "components2/molecules/NowButton"
import Choice from "components2/organisms/Choice"

export type PostFormInputs = {
  category: string
  content: string
}

type PostFormProps = {
  onSubmit?: SubmitHandler<PostFormInputs>
}

const PostForm: FC<PostFormProps> = ({
  register,
  handleSubmit = () => {},
  formState,

  onSubmit = () => {},
}) => {
  return (
    <FloatFrame>
      hello!
    </FloatFrame>
    /*
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div
          css={css`
            justify-content: center;
            display: flex;
            margin-bottom: 20px
          `}>
          <NowButton text='遊び' handler={() => {}} />
          <NowButton text='食事' />
          <NowButton text='睡眠' />
          <NowButton text='勉強・仕事' />
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
        `}
        />
        <div
          css={css`
            display: flex;
            justify-content: center;
            margin-bottom: 50px;
          `}>
          <UIButton text='なう' strong submit />
        </div>
      </form>
    </>
    */
  )
}

export default PostForm
