import React from "react"
import { css } from "@emotion/react"

import Icon from "components/atoms/Icon"

const User = () => {
  return (
    <>
      <div
        css={css`
        margin-top: 10px;
        margin-bottom: 10px;
      `}>
        <div
          css={css`
          display: flex;
        `}>
          <div
            className='icon'
            css={css`
            width: 45px;
            height: 45px;
          `}>
            <a href='#'>
              <Icon iconUrl='../../../../images/sample.png' />
            </a>{" "}
            {/* アイコンクリックでそのユーザーのプロフィールへ遷移 */}
          </div>
          <div
            css={css`
              margin-left: 10px;
            `}>
            <div
              css={css`
                display: flex;
              `}>
              <div className='name'>
                <strong>UserName</strong>
              </div>
            </div>
            <div
              className='text'
              css={css`
              white-space: normal;
            `}>
              profile
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default User
