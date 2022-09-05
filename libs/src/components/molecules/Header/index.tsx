import { FC } from "react"
import { css } from "@emotion/css"

//タイトルのアイコンでクリックするとページ遷移したい
const Header: FC = () => {
  return (
    <header>
      <h1 className={styles.h1}>ooなう</h1>
      
    </header>
  )
}

const styles = {
  h1: css`
    text-align: center;
  `
}
export default Header
