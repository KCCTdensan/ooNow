import React from "react";
import { css } from "@emotion/react"
import Header from "components/organisms/Header"
import Footer from "components/organisms/Footer"
import UIButton from "components/atoms/UIButton"

const Post = () => {
    return (
        <>
        <Header></Header>
        <div>
            
        </div>
        <div css={
            css`
                display: flex;
                justify-content: center;
                margin-bottom: 50px;
                
            `
        }>
            <form action="">
            <textarea
            css={
                css`
                    border: medium solid black;
                    border-radius: 1em;
                `
            }
            name="" 
            id="" 
            cols="20" 
            rows="5" 
            autoFocus="true"
            placeholder="いましていること">

            </textarea>
            </form>
            <div css={
                css`
                    margin-top: 80px;
                    margin-left: 40px;
                `
            }>
            <UIButton text="なう"/>
            </div>
        </div>
        <Footer></Footer>
        </>
    )
}

export default Post