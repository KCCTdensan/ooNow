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
    <header css={styles.title}>
      <div css={styles.menu}>
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
        </Menu>
      </div>
      <div css={styles.logo}>
        <Logo />
      </div>
      <div />
    </header>
  )
}

const styles = {
  title: css`
    padding-top: 0px;
    margin-top: 0px;
    display: flex;
    justify-content: space-between;
  `,
  logo: css`
    display: block;
  `,
}

export default Header
