import { FC } from "react"
import { css } from '@emotion/css'
import UIButton from "../../atoms/UIButton";

//将来的にはログインページに遷移したい
const testHundler = () => {
    alert("ログインフォームへ遷移します");
}


const Footer: FC = () => {
  return (
    <footer className={css`
        display: inline-block;
    `}>
        <ul className={css`
        display: inline-block;
              
        `}>
            <li>外部リンク</li>
            <ul>
                <li>
                    <a href="https://d3bu.net">KCCT 電算部HP</a>
                </li>
                <li>
                    <a href="https://twitter.com/intent/user?screen_name=kcct_densan">KCCT 電算部公式Twitter</a>
                </li>
                <li>
                    <a href="http://www.kobe-kosen.ac.jp">神戸高専HP</a>
                </li>
            </ul>
        </ul>
    <div className={css`
        display: inline-block;
        margin-left: 50px;
        margin-top: 20px;
    `}>
        <UIButton text="ログイン" handler={testHundler} dark={false} strong={false} />
    </div>

    </footer>
  )
}


export default Footer
