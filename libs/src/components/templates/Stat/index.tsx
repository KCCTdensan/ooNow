import React from "react"
import { css } from "@emotion/react"
import NowShow from "components/molecules/NowShow"
import Header from "components/organisms/Header"
import Footer from "components/organisms/Footer"

const Stat = () => {
	return (
		<>
		<Header />
		<div css={
			css`
				width:70%;
            	margin-left:15%;
            	margin-right:15%;
			`
		}>
		<div css={
			css`
				height:20%;
			`
		} 
		className="info">
	        <h1>〇〇なう For Company</h1>
	        <h3>当サービスを利用しているユーザーの統計情報を表示します。</h3>
  		</div>
			<div css={
				css`
					position:relative;
					top: 10px;
					left: 10px;
				`
			}>
				<NowShow size={100} name="Sample" nowValue={50} wasValue={25} age={30} gender="男" color="aquamarine"/>
			</div>
			<div css={
				css`
					position:relative;
					top: -60px;
					left: 130px;
				`
			}>
				<NowShow size={212} name="Game" nowValue={100} wasValue={50} age={10} gender="男" color="#0051ff" />
			</div>
			<div css={
				css`
					position:relative;
					top: -55px;
					left: 30px;
				`
			}>
				<NowShow size={212} name="study" nowValue={40} wasValue={60} age={10} gender="女" color="#00d836" />
			</div>
			<div css={
				css`
					position:relative;
					top: -340px;
					left: 210px;
				`
			}>
				<NowShow size={173} name="job" nowValue={120} wasValue={60} age={30} gender="男" color="#ffae00" />
			</div>
		</div>
		<Footer />
		</>
	)
} 

export default Stat