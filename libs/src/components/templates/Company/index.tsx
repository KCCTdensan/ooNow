import React from "react"
import { css } from "@emotion/react"

import Header from "components/organisms/Header"
import Footer from "components/organisms/Footer"
import UserData from "components/molecules/UserData"

const Company = () => {
  return (
    <>
      <Header />
      <p>ユーザーに送信する広告をアップロードしてください</p>
      <form>
        <label
          css={css`
                    padding: 10px 40px;
                    color: #ffffff;
                    background-color: #384878;
                    cursor: pointer;
                `}>
          <input
            css={css`
                        display: none;
                    `}
            type='file'
            id='ad'
            name='ad'
            accept='sample.png'
          />
          ファイルを選択
        </label>
      </form>
      <p>取得したいユーザー情報を指定してください</p>
      <form>
        <p>年齢</p>
        <label
          css={css`
                    cursor: pointer;
                `}>
          <input type='radio' name='age' />
          10-19
        </label>
        <label
          css={css`
                    cursor: pointer;
                `}>
          <input type='radio' name='age' checked />
          20-29
        </label>
        <label
          css={css`
                    cursor: pointer;
                `}>
          <input type='radio' name='age' />
          30-39
        </label>
        <label
          css={css`
                    cursor: pointer;
                `}>
          <input type='radio' name='age' />
          40-49
        </label>
        <label
          css={css`
                    cursor: pointer;
                `}>
          <input type='radio' name='age' />
          50-59
        </label>
        <label
          css={css`
                    cursor: pointer;
                `}>
          <input type='radio' name='age' />
          60-69
        </label>
        <label
          css={css`
                    cursor: pointer;
                `}>
          <input type='radio' name='age' />
          70-79
        </label>
        <label
          css={css`
                    cursor: pointer;
                `}>
          <input type='radio' name='age' />
          80-89
        </label>
        <label
          css={css`
                    cursor: pointer;
                `}>
          <input type='radio' name='age' />
          90-99
        </label>
        <label
          css={css`
                    cursor: pointer;
                `}>
          <input type='radio' name='age' />
          100-109
        </label>
      </form>

      <form>
        <p>話題</p>

        <label
          css={css`
                    cursor: pointer;
                `}>
          <input type='radio' name='trend' />
          ゲーム
        </label>

        <label
          css={css`
                    cursor: pointer;
                `}>
          <input type='radio' name='trend' />
          アニメ
        </label>

        <label
          css={css`
                    cursor: pointer;
                `}>
          <input type='radio' name='trend' />
          勉強
        </label>

        <label
          css={css`
                    cursor: pointer;
                `}>
          <input type='radio' name='trend' />
          仕事
        </label>

        <label
          css={css`
                    cursor: pointer;
                `}>
          <input type='radio' name='trend' />
          作業
        </label>

        <label
          css={css`
                    cursor: pointer;
                `}>
          <input type='radio' name='trend' />
          旅行
        </label>

        <label
          css={css`
                    cursor: pointer;
                `}>
          <input type='radio' name='trend' />
          アウトドア
        </label>

        <label
          css={css`
                    cursor: pointer;
                `}>
          <input type='radio' name='trend' checked />
          その他
        </label>
        <div
          css={css`
                    
                `}>
          <input
            css={css`
                    cursor: pointer;
                `}
            type='submit'
            value='送信'
          />
        </div>
      </form>

      <Footer />
    </>
  )
}

export default Company
