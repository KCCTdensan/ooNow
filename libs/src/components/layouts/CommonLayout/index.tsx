import { FC, ReactNode } from "react"

import CommonFrame from "components/layouts/CommonFrame"
import Header from "components/organisms/Header"
import Footer from "components/organisms/Footer"

type CommonLayoutProps = {
  children: ReactNode
}

const CommonLayout: FC<CommonLayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      <CommonFrame>{children}</CommonFrame>
      <Footer />
    </>
  )
}

export default CommonLayout
