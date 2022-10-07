import { FC } from "react"
import { css } from "@emotion/react"

import FormError from "components/atoms/FormError"
import ButtonLink from "components/molecules/ButtonLink"

type FormErrorSuggestProps = {
  msg: string
  text: string
  to: string
}

const FormErrorSuggest: FC<FormErrorSuggestProps> = ({ msg, text, to }) => {
  return (
    <div
      css={css`
       display: flex;
       width: 100%;
       position: relative;
     `}>
      <>
        <FormError msg={msg} />
        <div
          css={css`
            position: absolute;
            right: 0;
            bottom: 0;
          `}>
          <ButtonLink text={text} to={to} />
        </div>
      </>
    </div>
  )
}

export default FormErrorSuggest
