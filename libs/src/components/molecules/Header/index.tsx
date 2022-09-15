import { FC } from "react"
import { css } from "@emotion/react"
import Logo from "components/atoms/Logo"

//タイトルのアイコンでクリックするとページ遷移したい
const Header: FC = () => {
  return (
    <header css={styles.title}>
      <Logo />
    </header>
  )
}

const styles = {
  title: css`
    text-align: center;
    padding-top: 0px;
    margin-top: 0px;
  `
}
export default Header
