import { FC } from "react"
import { css } from "@emotion/react"

import Icon from "components/atoms/Icon"
import UIButton from "components/atoms/UIButton"

type Post = any

type TimeLineProps = {
  posts: Post[]
}

const TimeLine: FC<TimeLineProps> = ({ posts }) => {
  console.log(posts)
  return (
    <div
      css={css`
        margin-top: 10px;
        margin-bottom: 10px;
        border: solid 2px black;
      `}>
      <div
        css={css`
          display: flex;
          padding: 10px;
        `}>
        <div
          css={css`
              margin-left: 10px;
            `}>
          <div
            css={css`
                display: flex;
              `}>
            <div
              css={css`
                  
                `}>
              <UIButton text='同じく' />
            </div>
            <div
              css={css`
                  margin-left: 20px;
                `}>
              <UIButton text='がんば！' />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TimeLine
