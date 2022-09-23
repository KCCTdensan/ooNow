import React from "react"
import { css } from "@emotion/react"
import Icon from "components/atoms/Icon"

const TimeLine = () => {
  return (
    <>
      <div css={styles.body}>
        <div css={styles.element}>
          <div className='icon' css={styles.icon}>
            <Icon s='../../../../images/sample.png' w='45' h='45'></Icon>
          </div>
          <div
            css={css`
              margin-left: 10px;
            `}>
            <div
              css={css`
                display: flex;
              `}>
              <div className='name' css={styles.name}>
                <strong>UserName</strong>
              </div>
              <div className='time' css={styles.time}>
                yyyy/mm/dd
              </div>
            </div>
            <div className='text' css={styles.text}>
              SampleText
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default TimeLine

const styles = {
  element: css`
    display: flex;
  `,
  icon: css``,
  time: css`
    font-size: 70%;
    margin-left: 20px;
  `,
  text: css`
    white-space: normal;
  `,
  body: css`
    margin-top: 10px;
    margin-bottom: 10px;
  `,
}
