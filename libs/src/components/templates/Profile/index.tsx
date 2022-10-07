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
      <MyProfile></MyProfile>
      <Footer />
    </>
  )
}

export default MyProfiles
