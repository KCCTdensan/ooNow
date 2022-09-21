import React from "react";
import { css } from "@emotion/react";
import Icon from "../../atoms/Icon";

const TimeLine = () => {
    return (
        <>
        <div css={styles.body}>
        <div css={styles.element}>
            <div className="icon" css={styles.icon}>
                    <Icon s="../../../../images/sample.png"></Icon>
            </div>
            <div css={css`
                margin-left: 10px;
            `}>
                <div css={css`
                    display: flex;
                `}>
                    <div className="name" css={styles.name}>
                        <strong>UserName</strong>
                    </div>
                    <div className="time" css={styles.time}>
                        yyyy/mm/dd
                    </div>
                </div>
                <div className="text" css={styles.text}>
                    SampleText
                </div>
                
            </div>
        </div>
        </div>
        </>
    )
}

export default TimeLine

const styles = {
    element: css`
        display: flex;
    `,
    icon: css`

    `,
    time: css`
        font-size: 70%;
        margin-left: 20px;
    `,
    text: css`
        white-space: normal;
    `,
    name: css`
        
    `,
    body: css`
        margin:2em 0;
    margin-left: auto;
    margin-right: auto;
    position: relative;
    padding: 0.5em 1.5em;
    border-top: solid 2px black;
    border-bottom: solid 2px black;
    &:before, &:after{
    content: '';
    position: absolute;
    top: -10px;
    width: 2px;
    height: -webkit-calc(100% + 20px);
    height: calc(100% + 20px);
    background-color: black;
    }
    &:before {left: 10px;}
    &:after {right: 10px;}
    `
}