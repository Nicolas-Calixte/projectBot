import React from "react"

import Input from "./primaryComponents/Input"

const InputPassword = () => {
  return (
    <Input
      controlId="formBasicPassword"
      label="Mot de Passe"
      type="password"
      placeholder="Rentrez votre mot de passe"
    />
  )
}

export default InputPassword
