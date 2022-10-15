import { HomeTemplate } from "@kcctdensan/oonow-libs/next"
import { ButtonLink } from "@kcctdensan/oonow-libs/next"
import { css } from "@emotion/react"

export default function IndexScreen() {
  return (
    <>
      <div
        css={css`
          position: fixed;
          bottom: 3rem;
          right: 3rem;
          `}>
        <ButtonLink text='投稿' to='/post' strong={true} />
      </div>
      <HomeTemplate />
    </>
  )
}
