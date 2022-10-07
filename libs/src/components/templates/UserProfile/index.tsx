import { useState } from "react"
import { css } from "@emotion/react"
import Header from "components/organisms/Header"
import Footer from "components/organisms/Footer"
import Profile from "components/organisms/Profile"

const UserProfile = () => {
  return (
    <>
      <Header />
      <Profile />
      <Footer />
    </>
  )
}

export default UserProfile
