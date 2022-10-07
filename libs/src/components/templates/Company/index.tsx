import React from "react"
import { css } from "@emotion/react"

import Header from "components/organisms/Header"
import Footer from "components/organisms/Footer"
import UserData from "components/molecules/UserData"
import CompanyForm from "components/organisms/CompanyForm"

const Company = () => {
  return (
    <>
      <Header />
      <CompanyForm />
      <Footer />
    </>
  )
}

export default Company
