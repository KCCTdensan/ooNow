import React from "react";
import { css } from "@emotion/react"
import Header from "components/organisms/Header"
import Footer from "components/organisms/Footer"
import UserData from "components/molecules/UserData"

const Company = () => {

    return (
        <>
        <Header/>
        <div css={
            css`
                padding: 5px;
                border: solid 2px black;
            `
        }>
        <h3>ユーザー情報</h3>

        <UserData name="name" age={20} trend="trend"/>

        </div>
        <div css={
            css`
                margin-top: 20px;
                margin-bottom: 20px;
                padding: 5px;
                border: solid 2px black;
            `
        }>
        <h3>全体トレンド</h3>

        <div css={
            css`
                margin-left: 100px;
                font-size: 120%;
                font-weight: 450;
            `
        }>trend</div>
        </div>
        <Footer/>
        </>
    )
}

export default Company;