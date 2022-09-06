import { FC } from "react";
import { css } from "@emotion/css";
import UIButton from "../../atoms/UIButton";

//将来的にはログインページに遷移したい
const testHundler = () => {
  alert("ログインフォームへ遷移します");
};

const Footer: FC = () => {
  return (
    <>
      <footer className={styles.footer}>
        <ul className={styles.footer}>
          <li>外部リンク</li>
          <ul>
            <li>
              <a className={styles.a} href="https://d3bu.net">
                KCCT 電算部HP
              </a>
            </li>
            <li>
              <a
                className={styles.a}
                href="https://twitter.com/intent/user?screen_name=kcct_densan"
              >
                KCCT 電算部公式Twitter
              </a>
            </li>
            <li>
              <a className={styles.a} href="http://www.kobe-kosen.ac.jp">
                神戸高専HP
              </a>
            </li>
          </ul>
        </ul>
        <div className={styles.button}>
          <UIButton
            text="ログイン"
            handler={testHundler}
            dark={false}
            strong={false}
          />
        </div>
      </footer>
      <div className={styles.copy}>&copy; 神戸高専電算部</div>
    </>
  );
};

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
};

export default Footer;
