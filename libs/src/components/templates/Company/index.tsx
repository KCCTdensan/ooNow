import React from "react"
import { css } from "@emotion/react"

import CommonLayout from "components/layouts/CommonLayout"
import UserData from "components/molecules/UserData"
import CompanyForm from "components/organisms/CompanyForm"

const Company = () => {
  return (
    <>
      <CommonLayout>
        <div css={css`
          width: 100%;
          max-width: 600px;
          margin-right: auto;
          margin-left: auto;
          margin-bottom: 3em;`
        }>
          <CompanyForm />
        </div>
      </CommonLayout>
    </>
  )
}

export default Company
