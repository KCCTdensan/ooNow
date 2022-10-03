import React from "react";
import { css } from "@emotion/react"
import Header from "components/organisms/Header"
import Footer from "components/organisms/Footer"
import User from "components/organisms/User";

const ViewUsers = () => {
    return (
        <>
        <Header></Header>
        <h3 css={
            css`
                text-align: center;
            `
        }>Followers</h3>
        <div css={
            css`
                margin-right: 400px;
            `
        }>
        <div css={
            css`
                display: flex;
                justify-content: center;
            `
        }>
            <User></User>
        </div>
        <div css={
            css`
                display: flex;
                justify-content: center;
            `
        }>
            <User></User>
        </div>
        <div css={
            css`
                display: flex;
                justify-content: center;
            `
        }>
            <User></User>
        </div>
        <div css={
            css`
                display: flex;
                justify-content: center;
            `
        }>
            <User></User>
        </div>
        <div css={
            css`
                display: flex;
                justify-content: center;
            `
        }>
            <User></User>
        </div>
        </div>
        <Footer></Footer>
        </>
    )
}

export default ViewUsers