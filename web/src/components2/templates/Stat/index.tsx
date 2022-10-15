import React from "react"
import { css } from "@emotion/react"
import NowShow from "components2/molecules/NowShow"
import CommonLayout from "components2/layouts/CommonLayout"

const Stat = () => {
  return (
    <>
      <CommonLayout>
        <div
          css={css`
				width:70%;
            	margin-left:15%;
            	margin-right:15%;
			`}>
          <div
            css={css`
				height:20%;
			`}
            className='info'>
            <h1>〇〇なう For Company</h1>
            <h3>当サービスを利用しているユーザーの統計情報を表示します。</h3>
          </div>
          <div
            css={css`
					position:relative;
					top: 10px;
					left: 10px;
				`}>
            <NowShow
              size={100}
              name='ゲーム'
              nowValue={0}
              wasValue={2}
              age='10代'
              gender='男'
              color='aquamarine'
            />
          </div>
          <div
            css={css`
					position:relative;
					top: -60px;
					left: 130px;
				`}>
            <NowShow
              size={212}
              name='勉強'
              nowValue={2}
              wasValue={9}
              age='10代'
              gender='男'
              color='#0051ff'
            />
          </div>
          <div
            css={css`
					position:relative;
					top: -55px;
					left: 30px;
				`}>
            <NowShow
              size={212}
              name='アウトドア'
              nowValue={2}
              wasValue={6}
              age='20代'
              gender='男'
              color='#00d836'
            />
          </div>
          <div
            css={css`
					position:relative;
					top: -340px;
					left: 210px;
				`}>
            <NowShow
              size={173}
              name='仕事'
              nowValue={120}
              wasValue={60}
              age='20代、30代'
              gender='男'
              color='#ffae00'
            />
          </div>
        </div>
      </CommonLayout>
    </>
  )
}

export default Stat
