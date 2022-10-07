import React from "react"
import { css } from "@emotion/react"

import UIButton from "components/atoms/UIButton"
import NowButton from "components/molecules/NowButton"
import Header from "components/organisms/Header"
import Footer from "components/organisms/Footer"
import Choice from "components/organisms/Choice"

const Post = () => {
  return (
    <>
      <Header></Header>
      <div></div>
      <div
        css={css`
                justify-content: center;
                display: flex;
                margin-bottom: 20px
            `}>
        <NowButton text='遊び' />
        <NowButton text='食事' />
        <NowButton text='睡眠' />
        <NowButton text='勉強・仕事' />
      </div>
      <div
        css={css`
                display: flex;
                justify-content: center;
                margin-bottom: 50px;
                
            `}>
        <form action=''>
          <input
            css={css`
                    border: medium solid black;
                    border-radius: 1em;
                    resize: none;
                `}
            name=''
            id=''
            cols='20'
            rows='5'
            autoFocus='true'
            placeholder='いましていること'></input>
        </form>
        <div
          css={css`
                    margin-top: 80px;
                    margin-left: 40px;
                `}></div>
        <div
          css={css`
                display: flex;
                justify-content: center;
                margin-bottom: 50px;
                
            `}>
          <UIButton text='なう' strong />
        </div>
      </div>
      <Footer></Footer>
    </>
  )
}

export default Post
