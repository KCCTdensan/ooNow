import React, { useState } from "react"
import { css } from "@emotion/react"
import Header from "components/organisms/Header"
import Footer from "components/organisms/Footer"
import SnippetOrganism from "components/organisms/SnippetOrganism"

const Snippet: React.FC = () => {
  return (
    <>
      <Header />
      <SnippetOrganism/>
      <Footer />
    </>
  )
}

export default Snippet
