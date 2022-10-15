import { FC, ReactNode } from "react"
import { css, useTheme } from "@emotion/react"
import NextLink from "next/link"

type LinkProps = {
  to: any
  children: ReactNode
  noa: boolean // for Next
}

const Link: FC<LinkProps> = ({ to, children, noa }) => {
  const theme = useTheme()
  const style = css`
    color: ${theme.fg};
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  `

  // if (__BTARGET__ === "dom") {
  //   return (
  //     <a href={to} css={style}>
  //       {children}
  //     </a>
  //   )
  // }
  // if (__BTARGET__ === "next") {
  //   return (
  //     <NextLink href={to} passHref>
  //       {noa ? children : <a css={style}>{children}</a>}
  //     </NextLink>
  //   )
  // }
  // if (__BTARGET__ === "native") {
  //   return <>{children}</>
  // }
}

export default Link
