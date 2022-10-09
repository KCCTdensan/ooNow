import { FC } from "react"
import { css } from "@emotion/react"

import ButtonLink from "components/molecules/ButtonLink"
import Icon from "components/atoms/Icon"

const Footer: FC = () => {
  return (
    <>
      <footer
        css={css`
          display: inline-block;
          display: flex;
          justify-content: center;
          align-items: center;
          background-color: #333333;
          color: white;
        `}>
        <ul
          css={css`
            display: inline-block;
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: #333333;
            color: white;
          `}>
          <li>外部リンク</li>
          <ul>
            <li>
              <a
                css={css`
                  text-decoration: none;
                  color: white;
                `}
                href='https://d3bu.net'>
                d3bu.net
              </a>
            </li>
            <li>
              <a
                css={css`
                  text-decoration: none;
                  color: white;
                `}
                href='http://www.kobe-kosen.ac.jp'>
                KCCT
              </a>
            </li>
            <li css={
              css`
                width: 40px;
                height: 40px;
                margin-top: 5px;
                margin-bottom: 5px;
              `
            }>
              <a href="https://twitter.com/intent/user?screen_name=kcct_densan">
                <Icon iconUrl="../../../../images/Twitter social icons - circle - white.png"/>
              </a>
            </li>
          </ul>
        </ul>
        <div
          css={css`
            display: inline-block;
            display: flex;
            margin-left: 40px;
          `}>
          <ButtonLink text='ログイン' to='/login' strong={false} />
        </div>
        <div
          css={css`
            display: inline-block;
            display: flex;
            margin-left: 40px;
          `}>
          <ButtonLink text='サインアップ' to='/register' strong={false} />
        </div>
      </footer>
      <div
        css={css`
          display: inline-block;
          display: flex;
          justify-content: center;
          align-items: center;
          background-color: #333333;
          color: white;
          padding-bottom: 20px;
        `}>
        &copy; 神戸高専電算部
      </div>
    </>
  )
}

export default Footer
