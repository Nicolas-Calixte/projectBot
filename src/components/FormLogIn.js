import React from "react"

import { Form, FormControl, FormGroup, FormLabel } from "react-bootstrap"

const FormLogIn = () => {
  return (
    <div>
      <Form>
        <FormGroup controlId="formBasicEmail">
          <FormLabel>Email</FormLabel>
          <FormControl
            size="lg"
            type="email"
            placeholder="Entrez votre adresse email"
          />
        </FormGroup>
        <FormGroup controlId="formBasicPassword">
          <FormLabel>Mot de passe</FormLabel>
          <FormControl
            size="lg"
            type="password"
            placeholder="Entrez votre mot de passe"
          />
        </FormGroup>
      </Form>
    </div>
  )
}

export default FormLogIn
