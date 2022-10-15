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
              margin: 2em auto;
              position: relative;
              padding: 0.5em 1.5em;
            `}>
            <TimeLine />
          </div>
        </div>
      </CommonLayout>
    </>
  )
}

export default Home
