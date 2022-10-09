import { useState } from "react"
import { css } from "@emotion/react"
import Header from "components/organisms/Header"
import Footer from "components/organisms/Footer"
import Profile from "components/organisms/Profile"

const UserProfile = () => {
  return (
    <>
      <Header />
      <div css={css`
        width: 100%;
        max-width: 800px;
        margin-right: auto;
        margin-left: auto;`
      }>
        <Profile />
      </div>
      <Footer />
    </>
  )
}

export default UserProfile
