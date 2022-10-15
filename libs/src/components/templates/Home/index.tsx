import { css } from "@emotion/react"
import React from "react"

import CommonLayout from "components/layouts/CommonLayout"
import TimeLine from "components/organisms/TimeLine"

const Home: React.FC = () => {
  return (
    <>
      <CommonLayout>
        <div
          css={css`
        width: 100%;
        max-width: 800px;
        margin-right: auto;
        margin-left: auto;`}>
          <div
            css={css`
              margin: 2em 0;
              margin-left: auto;
              margin-right: auto;
              position: relative;
              padding: 0.5em 1.5em;
              border-bottom: solid 2px black;
              &:before,
              &:after {
                content: "";
                position: absolute;
                top: -10px;
                width: 2px;
                height: -webkit-calc(100% + 20px);
                height: calc(100% + 20px);
                background-color: black;
              }
              &:before {
                left: 10px;
              }
              &:after {
                right: 10px;
              }
            `}>
            <TimeLine />
          </div>
        </div>
      </CommonLayout>
    </>
  )
}

export default Home
