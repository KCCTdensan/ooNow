import React from "react"
import Icon from "."
import IconFile from "../../../../images/sample.png"

export default {
  title: "Atoms / Icon",
  component: Icon,
}

export const Icons = () => {
  return (
    <div
      css={{
        width: "5em",
        height: "5em",
      }}>
      <Icon iconUrl={IconFile} />
    </div>
  )
}
