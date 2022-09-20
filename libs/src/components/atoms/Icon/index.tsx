import React from "react";
import { css } from "@emotion/react"

type Props = {
    s: string
}

const Icon: React.FC<Props> = ({s}) => {
    return (
        <img css={styles.img} src={s} alt="Icon" />
    )
}

export default Icon

const styles = {
    img: css`
        border: 3px;
        border-radius: 50%;
        width:  45px;
        height: 45px;
    `
}