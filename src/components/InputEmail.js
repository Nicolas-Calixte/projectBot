import React from "react"

import Input from "./primaryComponents/Input"

const InputEmail = () => {
  return (
    <Input
      controlId="formBasicEmail"
      label="Adresse email"
      type="email"
      placeholder="Rentrez votre adresse email"
    />
  )
}

export default InputEmail
