import React from "react"
import { css } from "@emotion/react"

import Icon from "components/atoms/Icon"
import UIButton from "components/atoms/UIButton"

const TimeLine = () => {
  return (
    <>
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
            className='icon'
            css={css`
            width: 60px;
            height: 60px;
          `}>
            <Icon iconUrl='../../../../images/sample.png' />
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
              <div
                className='time'
                css={css`
                font-size: 70%;
                margin-left: 20px;
              `}>
                yyyy/mm/dd
              </div>
            </div>
            <div
              className='text'
              css={css`
              white-space: normal;
              display: flex;
              margin-bottom: 10px;
            `}>
              SampleText
            </div>

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
    </>
  )
}

export default TimeLine
