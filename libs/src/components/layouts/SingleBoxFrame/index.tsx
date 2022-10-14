import { FC, ReactNode } from "react"
import { css } from "@emotion/react"

type SingleBoxFrameProps = {
  children: ReactNode
}

const SingleBoxFrame: FC<SingleBoxFrameProps> = ({ children }) => {
  return (
    <div
      css={css`
        height: 100vh;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;

        background: rgb(255, 76, 0);
        background: linear-gradient(
          90deg,
          rgba(255, 76, 0, 1) 0%,
          rgba(255, 128, 0, 1) 50%,
          rgba(255, 192, 0, 1) 100%
        );
        overflow-y: hidden;
      `}>
      <div
        css={css`
          background-color: white;
          width: 70%;
          max-width: 450px;
          padding: 30px;
          border-radius: 10px;
          border: 1px solid #dfdfdf;
          box-shadow: 25px 31px 29px -11px #b35f00;
          border-radius: 10px;
        `}>
        {children}
      </div>
    </div>
  )
}

export default SingleBoxFrame
