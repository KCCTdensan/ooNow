import React, { useState } from "react"
import { css } from "@emotion/react"
import Icon from "components/atoms/Icon"
import UIButton from "components/atoms/UIButton"
import TimeLine from "../TimeLine"

const MyProfile = () => {
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
    <div
      css={css`
            margin-left: 100px;
            margin-right: 100px;
            `}>
      <div
        css={css`
            display: flex;
            width: 45px;
            height: 45px;
            `}>
        <Icon iconUrl='../../../../images/sample.png' />
        <div
          css={css`
                display: flex;
                justify-content: flex-end;
                margin-left: 674px;
                height: 150%;
            `}>
          <UIButton text='編集' handler={onClickSetFlag} />
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
      <div
        css={css`
                margin-top: 100px;
                margin-bottom: 40px;
            `}>
        <TimeLine />
      </div>
    </div>
  )
}

export default MyProfile
