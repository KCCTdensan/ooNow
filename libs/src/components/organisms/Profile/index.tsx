import React from "react";
import { css } from "@emotion/react"
import UIButton from "components/atoms/UIButton"
import Icon from "components/atoms/Icon"
import TimeLine from "../TimeLine";


const Profile = () => {
    return (
        <div
        css={css`
            margin-left: 300px;
            margin-right: 300px;
        `}>
        <div
        css={css`
            display: flex;
            width: 45px;
            height: 45px;
        `}>
        <Icon iconUrl='../../../../images/sample.png' />
        </div>
        <div
        css={css`
            font-weight: bold;
            `}>
        UserName
        </div>
        <div>
        <p>ProfileText</p>

        <UIButton text='Follow'></UIButton>
        </div>

        <div
        css={css`
            margin-top: 100px;
            margin-bottom: 40px;
            `}>
            <TimeLine />
        </div>
        </div>
        
    )
}

export default Profile