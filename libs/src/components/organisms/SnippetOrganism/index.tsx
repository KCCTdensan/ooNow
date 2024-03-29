import React, { useState } from "react"
import { css } from "@emotion/react"
import Icon from "components/atoms/Icon"
import UIButton from "components/atoms/UIButton"

const SnippetOrganism = () => {
  const [text, setText] = useState("")
  const [templates, setTemplates] = useState([""])
  const [count, setCount] = useState(0)

  // templatesにinputの中身を追加
  const onClickHandler = () => {
    setTemplates([...templates, text])
    setText("")
    setCount(count + 1)
  }

  // templatesの中身を展開して改行
  const texts = templates
    .join("\n")
    .split("\n")
    .map((item: any, index: any) => {
      return (
        <React.Fragment key={index}>
          <li>{item}</li>
        </React.Fragment>
      )
    })

  return (
    <>
      <div
        css={css`
          display: flex;
          margin-bottom: 10px;
          justify-content: center;

                `}>
        <div
          css={css`
            width: 60px;
            height: 60px;
            display: flex;
            `}>
          <Icon iconUrl='../../../../images/sample.png' />
        </div>
        <input
          css={css`
            margin-left: 25px;
            border-radius: 0.8rem;
            width: 400px;
        `}
          name='Snippet'
          placeholder='テンプレートを入力してください'
          autoFocus
          value={text}
          onChange={e => setText(e.target.value)}
        />
      </div>
      <div
        css={css`
          margin-left: 65%;
          margin-bottom: 20px;
          &:hover {
            cursor: pointer;
          }
          display: flex;
        `}>
        <UIButton text='登録' handler={onClickHandler} />
      </div>
      <div
        css={css`
        text-align: center;
        font-size: 150%;
        `}>
        一覧
      </div>
      <div
        css={css`
                text-align: center;
                margin-right: 50px;
            `}>
        <ul>{texts}</ul>
      </div>
    </>
  )
}

export default SnippetOrganism
