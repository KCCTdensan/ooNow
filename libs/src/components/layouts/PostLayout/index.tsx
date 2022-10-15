import { FC, ReactNode } from "react"
import { css, useTheme } from "@emotion/react"
import Home from "components/templates/Home"

type PostLayoutProps = {
  children: ReactNode
}

const PostLayout: FC<PostLayoutProps> = ({ children }) => {
  const theme = useTheme()

  return( 
    <div css={css`
      
    `}>
      <Home/>
      <div css={css`
        position: fixed;
        top: 10rem;
        left: 50%;
        transform: translateX(-50%);
        background-color: ${theme.bg};
        width: 48rem;
        height: 25rem;
        border-radius: 1rem;
        border: ${theme.border.totemohosoi} solid;
      `}>
        {children}
      </div>
    </div>
  )
}

export default PostLayout
