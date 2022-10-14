import { FC, useState } from "react"
import { css } from "@emotion/react"

import Icon from "components/atoms/Icon"
import UIButton from "components/atoms/UIButton"

type MyProfileHeaderProps = {}

const MyProfileHeader: FC<MyProfileHeaderProps> = () => {
  const [text, setText] = useState("")
  const [addText, setAddText] = useState("")
  const [flag, setFlag] = useState(false)

  const onClickAddText = () => {
    setAddText(text)
    setText("")
    setFlag(false)
  }
  const onClickSetFlag = () => {
    setFlag(true)
  }

  return (
    <>
      <div css={css`display: flex;`}>
        <Icon iconUrl='../../../../images/sample.png' />
        <div
          css={css`
            display: flex;
            justify-content: flex-end;
            margin-left: 674px;
            height: 150%;
          `}>
          <ButtonLink text='編集' to='/profile/edit' />
        </div>
      </div>
      <div
        css={css`
                font-weight: bold;
            `}>
        UserName
      </div>
      <div>
        <input
          css={css`
                display: ${flag ? "block" : "none"};
            `}
          value={text}
          onChange={e => setText(e.target.value)}
        />
        <p
          css={css`
                display: ${flag ? "none" : "block"};
            `}>
          {addText}
        </p>
        <div
          css={css`
                display: ${flag ? "block" : "none"};
            `}>
          <UIButton text='編集完了' handler={onClickAddText} />
        </div>
      </div>
    </>
  )
}

export default MyProfileHeader
