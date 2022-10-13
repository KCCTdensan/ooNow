import { FC, ReactNode } from "react"

import SingleBoxFrame from "components/layouts/SingleBoxFrame"
import Footer from "components/organisms/Footer"

type SingleBoxLayoutProps = {
  children: ReactNode
}

const SingleBoxLayout: FC<SingleBoxLayoutProps> = ({ children }) => {
  return (
    <>
      <SingleBoxFrame>
        {children}
      </SingleBoxFrame>
      <Footer />
    </>
  )
}

export default SingleBoxLayout
