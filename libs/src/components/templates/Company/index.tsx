import React from "react";
import { css } from "@emotion/react"
import Header from "components/organisms/Header"
import Footer from "components/organisms/Footer"
import UserData from "components/molecules/UserData"

const Company = () => {

    return (
        <>
        <Header/>
        <h3>ユーザー情報</h3>

        <UserData name="name" age={20} trend="駅" />

        <h3>全体トレンド</h3>

        <div>trend</div>
        <Footer/>
        </>
    )
}

export default Company;