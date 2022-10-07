import React from "react"
import { css } from "@emotion/react"

import User from "components/molecules/User"
import Header from "components/organisms/Header"
import Footer from "components/organisms/Footer"

const ViewUsers = () => {
  return (
    <>
      <Header></Header>

      <h3
        css={css`
                text-align: center;
            `}>
        Followers
      </h3>
      <div
        css={css`
            margin: 2em 0;
            margin-left: auto;
            margin-right: auto;
            position: relative;
            padding: 0.5em 1.5em;
            border-top: solid 2px black;
            border-bottom: solid 2px black;
            &:before,
            &:after {
              content: "";
              position: absolute;
              top: -10px;
              width: 2px;
              height: -webkit-calc(100% + 20px);
              height: calc(100% + 20px);
              background-color: black;
            }
            &:before {
              left: 10px;
            }
            &:after {
              right: 10px;
            }
          `}>
        <div
          css={css`
                margin-right: 400px;
            `}>
          <div
            css={css`
                display: flex;
                justify-content: center;
            `}>
            <User></User>
          </div>
          <div
            css={css`
                display: flex;
                justify-content: center;
            `}>
            <User></User>
          </div>
          <div
            css={css`
                display: flex;
                justify-content: center;
            `}>
            <User></User>
          </div>
          <div
            css={css`
                display: flex;
                justify-content: center;
            `}>
            <User></User>
          </div>
          <div
            css={css`
                display: flex;
                justify-content: center;
            `}>
            <User></User>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  )
}

export default ViewUsers
