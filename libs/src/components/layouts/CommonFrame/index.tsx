import { FC, ReactNode } from "react"

type CommonFrameProps = {
  children: ReactNode
}

const CommonFrame: FC<CommonFrameProps> = ({ children }) => {
  return (
    <div
      css={css`
        width: 100%;
        max-width: 800px;
        margin-right: auto;
        margin-left: auto;
      `}>
      {children}
    </div>
  )
}

export default CommonFrame
