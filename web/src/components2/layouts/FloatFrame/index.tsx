import { FC, ReactNode} from "react"
import {css} from "@emotion/react"

type FloatFrameProps = {
	children: ReactNode
}

const FloatFrame = ({children}) => {
	return (
		<div css={css`
			display: flex;
			max-width: 100%;
			min-width: 40rem;
			min-height: 20rem;
			margin: 0 auto;
			position: fixed;
			top: 10rem;
			background: red;
			`}>
			{children}
		</div>
	)
}

export default FloatFrame