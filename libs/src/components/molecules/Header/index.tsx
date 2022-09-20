import { FC } from "react"
import { css } from "@emotion/react"
import Logo from "components/atoms/Logo"
import Menu from "components/molecules/Menu"

const Header: FC = () => {
  return (
    <header css={styles.title}>
      <div css={styles.menu}>
      <Menu title="Menu">
        <Menu title="Sign Up"></Menu>
        <Menu title="Login"></Menu>
        <Menu title="Profile"></Menu>
      </Menu>
      </div>
      <div css={styles.logo}>
        <Logo />
      </div>
      <div/>
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
  `
  
}
export default Header
