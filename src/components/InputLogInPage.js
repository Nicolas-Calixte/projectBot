import React from "react"
import { Form } from "react-bootstrap"

import InputEmail from "./InputEmail"
import InputPassword from "./InputPassword"

const InputLogInPage = () => {
  return (
    <Form variant="info">
      <InputEmail />
      <InputPassword />
    </Form>
  )
}

export default InputLogInPage
