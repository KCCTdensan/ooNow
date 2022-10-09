import { useState } from "react"
import { css } from "@emotion/react"

import Icon from "components/atoms/Icon"
import UIButton from "components/atoms/UIButton"
import Header from "components/organisms/Header"
import Footer from "components/organisms/Footer"
import MyProfile from "components/organisms/MyProfile"
const MyProfiles = () => {
  return (
    <>
      <Header />
      <div css={css`
        width: 100%;
        max-width: 800px;
        margin-right: auto;
        margin-left: auto;`
      }>
        <MyProfile></MyProfile>
      </div>
      <Footer />
    </>
  )
}

export default MyProfiles
