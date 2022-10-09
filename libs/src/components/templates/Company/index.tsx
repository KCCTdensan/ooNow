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
        <div css={css`
          width: 100%;
          max-width: 600px;
          margin-right: auto;
          margin-left: auto;
          margin-bottom: 3em;`
        }>
          <CompanyForm />
        </div>
      <Footer />
    </>
  )
}

export default Company
