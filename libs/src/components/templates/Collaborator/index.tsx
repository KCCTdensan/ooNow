import React from "react"
import { css } from "@emotion/react"

import CommonLayout from "components/layouts/CommonLayout"
import UserData from "components/molecules/UserData"
import CollaboratorForm from "components/organisms/CompanyForm"

const Collaborator = () => {
  return (
    <>
      <CommonLayout>
        <div
          css={css`
          width: 100%;
          max-width: 600px;
          margin-right: auto;
          margin-left: auto;
          margin-bottom: 3em;`}>
          <CollaboratorForm />
        </div>
      </CommonLayout>
    </>
  )
}

export default Collaborator
