import React from "react"
import { css } from "@emotion/react"

import CommonLayout from "components2/layouts/CommonLayout"
import UserData from "components2/molecules/UserData"
import CollaboratorForm from "components2/organisms/CompanyForm"

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
