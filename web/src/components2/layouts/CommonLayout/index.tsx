import { FC, ReactNode } from "react"

import CommonFrame from "components2/layouts/CommonFrame"
import Header from "components2/organisms/Header"
import Footer from "components2/organisms/Footer"

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
