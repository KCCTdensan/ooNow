import Form from "."
import React from "react"

export default {
  title: "Molecules/Form",
  component: Form,
}

export const Forms = () => {
  return <Form text={"Login"} action={"login"}></Form>
}
