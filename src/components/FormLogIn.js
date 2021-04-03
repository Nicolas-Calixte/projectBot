import React from "react"
import { Form } from "react-bootstrap"
import mainFormGroup from "./primaryComponents/mainFormGroup"

const InputLogInPage = () => {
  return (
    <div>
      <Form variant="info">
        <mainFormGroup
          controlId="formBasicEmail"
          label="Adresse email"
          size="lg"
          type="email"
          placeholder="Entrez votre email"
        />
        <mainFormGroup
          controlId="formBasicPassword"
          label="Mot de passe"
          size="lg"
          placeholder="Entrez votre mot de passe"
        />
      </Form>
    </div>
  )
}

export default InputLogInPage
