import { useState } from "react"
import { css } from "@emotion/react"

import Icon from "components/atoms/Icon"
import UIButton from "components/atoms/UIButton"
import CommonLayout from "components/layouts/CommonLayout"
import MyProfile from "components/organisms/MyProfile"
const MyProfiles = () => {
  return (
    <>
      <CommonLayout>
      <div css={css`
        width: 100%;
        max-width: 800px;
        margin-right: auto;
        margin-left: auto;`
      }>
        <MyProfile></MyProfile>
      </div>
      </CommonLayout>
    </>
  )
}

export default MyProfiles
