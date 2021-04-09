import React from "react"
import { Form, FormControl, FormGroup, FormLabel } from "react-bootstrap"

const FormSignUp = () => {
  return (
    <div>
      <Form>
        <Form.Row>
          <FormGroup controlId="formGridName">
            <FormLabel>Nom</FormLabel>
            <FormControl size="lg" type="name" placeholder="Entrez votre nom" />
          </FormGroup>

          <FormGroup controlId="formGridFirstname">
            <FormLabel>Prénom</FormLabel>
            <FormControl
              size="lg"
              type="firstname"
              placeholder="Entrez votre prénom"
            />
          </FormGroup>
        </Form.Row>

        <Form.Row>
          <FormGroup controlId="formGridEmail">
            <FormLabel>Email</FormLabel>
            <FormControl
              size="lg"
              type="email"
              placeholder="Entrez votre adresse email"
            />
          </FormGroup>

          <FormGroup controlId="FormGridPhoneNumber">
            <FormLabel>Numéro de téléphone(optionnel)</FormLabel>
            <FormControl
              size="lg"
              type="phone number"
              placeholder="Entrez votre numéro de téléphone"
            />
          </FormGroup>
        </Form.Row>

        <Form.Row>
          <FormGroup controlId="FormGridPassword">
            <FormLabel>Mot de passe</FormLabel>
            <FormControl
              size="lg"
              type="password"
              placeholder="Créez votre mot de passe"
            />
          </FormGroup>

          <FormGroup controlId="FormGridPassword">
            <FormLabel>Confirmez le mot de passe</FormLabel>
            <FormControl
              size="lg"
              type="password"
              placeholder="Retapez votre mot de passe"
            />
          </FormGroup>
        </Form.Row>
      </Form>
    </div>
  )
}

export default FormSignUp
