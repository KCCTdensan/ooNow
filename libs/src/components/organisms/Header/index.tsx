import { FC } from "react"
import { css } from "@emotion/react"

import Link from "components/atoms/Link"
import Logo from "components/atoms/Logo"
import Menu from "components/molecules/Menu"

type User = any
type HeaderProps = {
  user?: User
}

const Header: FC = ({ user }) => {
  return (
    <header
      css={css`
        padding-top: 0px;
        margin-top: 0px;
        display: flex;
        justify-content: space-between;
      `}>
      <div
        css={css`
            width: 20%;
        `}>
        <Menu title='Menu'>
          {!user ? (
            <>
              <Link to='/register'>
                <Menu title='Sign Up' />
              </Link>
              <Link to='/login'>
                <Menu title='Login' />
              </Link>
            </>
          ) : (
            <>
              <Link to='/profile'>
                <Menu title='Profile' />
              </Link>
            </>
          )}
          <Link to='/company'>
            <Menu title='Company'/>
          </Link>
        </Menu>
      </div>
      <div
        css={css`
          width:50%;
        `}
      />
      <div
        css={css`
          display: block;
          width: 100%;
        `}>
        <Logo />
      </div>
      <div />
    </header>
  )
}

export default Header
