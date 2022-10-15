import { useState } from "react"
import { css } from "@emotion/react"

import Icon from "components2/atoms/Icon"
import UIButton from "components2/atoms/UIButton"
import CommonLayout from "components2/layouts/CommonLayout"
import MyProfile from "components2/organisms/MyProfile"
const MyProfiles = () => {
  return (
    <>
      <CommonLayout>
        <div
          css={css`
        width: 100%;
        max-width: 800px;
        margin-right: auto;
        margin-left: auto;`}>
          <MyProfile></MyProfile>
        </div>
      </CommonLayout>
    </>
  )
}

export default MyProfiles
