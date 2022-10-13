import React, { useState } from "react"
import { css } from "@emotion/react"
import CommonLayout from "components/layouts/CommonLayout"
import SnippetOrganism from "components/organisms/SnippetOrganism"

const Snippet: React.FC = () => {
  return (
    <>
      <CommonLayout>
      <SnippetOrganism/>
      </CommonLayout>
    </>
  )
}

export default Snippet
