import { FC } from "react"
import { css } from "@emotion/react"
import ButtonLink from "components/molecules/ButtonLink"

const Footer: FC = () => {
  return (
    <>
      <footer css={styles.footer}>
        <ul css={styles.footer}>
          <li>外部リンク</li>
          <ul>
            <li>
              <a css={styles.a} href='https://d3bu.net'>
                KCCT 電算部HP
              </a>
            </li>
            <li>
              <a
                css={styles.a}
                href='https://twitter.com/intent/user?screen_name=kcct_densan'>
                KCCT 電算部公式Twitter
              </a>
            </li>
            <li>
              <a css={styles.a} href='http://www.kobe-kosen.ac.jp'>
                神戸高専HP
              </a>
            </li>
          </ul>
        </ul>
        <div css={styles.button}>
          <ButtonLink
            text='ログイン'
            to='/login'
            strong={false}
          />
        </div>
        <div css={styles.button}>
          <ButtonLink
            text='サインアップ'
            to='/register'
            strong={false}
          />
        </div>
      </footer>
      <div css={styles.copy}>&copy; 神戸高専電算部</div>
    </>
  )
}

const styles = {
  footer: css`
    display: inline-block;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #333333;
    color: white;
  `,
  a: css`
    text-decoration: none;
    color: white;
  `,
  button: css`
    display: inline-block;
    display: flex;
    margin-left: 40px;
  `,
  copy: css`
    display: inline-block;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #333333;
    color: white;
    padding-bottom: 20px;
  `,
}

export default Footer
