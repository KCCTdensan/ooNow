import React, { useState } from "react"
import { css } from "@emotion/react"

type nowProps = {
  size: number
  nowValue: number
  wasValue: number
  name: string
  age: string
  gender: string
  color: any
}

const NowShow: React.FC<nowProps> = ({
  size,
  nowValue,
  name,
  wasValue,
  age,
  gender,
  color,
}) => {
  const [checkFlag, setCheckFlag] = useState(false)
  return (
    <>
      <div
        css={css`
				/*仮、実際にはカテゴリの投稿数に比例したpx数 */
				background-color: ${color}; /* 仮、実際には各カテゴリの色が入る */
				width: ${size}px;
				height: ${size}px; 
				border-radius: 50%;
				text-align: center;
				line-height: ${size}px;
			`}
        className='nows'>
        <label
          css={css`
					cursor: pointer;
				`}
          className='category_name_button'
          htmlFor='category_detail_status'>
          {name}
        </label>
        <input
          css={css`
					display: none;
					&:checked{
						display: none;
						background-color: #00000070;;
						width: 100vw;
						height: 100vh;
						z-index: 9999;
						position: fixed;
						top: 0;
						left: 0;
					}
				`}
          type='checkbox'
          id='category_detail_status'
          checked={checkFlag}
          onChange={e => setCheckFlag(!checkFlag)}
        />
        <div
          css={css`
					display: ${checkFlag ? "block" : "none"};
					background-color: #00000070;;
					width: 100vw;
					height: 100vh;
					z-index: 9999;
					position: fixed;
					top: 0;
					left: 0;
				`}
          className='overlay'>
          <div
            css={css`
						display: block;
						width: 470px;
						height: 260px;
						background-color: rgb(243, 243, 243);
						border-radius: 1%;
						text-align: center;
						margin-left: 15vw;
						margin-top: 25vh;
						margin-bottom: 10vh;

						font-weight:500;
						font-size: large;
						line-height:normal;
					`}
            className='category_detail'>
            <div
              css={css`
							margin: 5%;
						`}
              className='text'>
              現在有効な総”なう”数：{nowValue.toString()}
            </div>
            <div
              css={css`
							margin: 5%;
						`}
              className='text'>
              カテゴリー：{name}
            </div>
            <div
              css={css`
							margin: 5%;
						`}
              className='text'>
              累積総”わず”数：{wasValue.toString()}
            </div>
            <div
              css={css`
							margin: 5%;
						`}
              className='text'>
              次のユーザーに人気：{age.toString()} {gender}性
            </div>
            <div
              css={css`
							margin: 5%;
						`}
              className='text'>
              <label
                css={css`
							cursor: pointer;
            				height:20%;
						`}
                className='close_button'
                htmlFor='category_detail_status'>
                [閉じる]
              </label>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default NowShow
