import React from "react"
import { Form, FormControl, FormGroup, FormLabel, Row } from "react-bootstrap"
import { useHistory } from "react-router"

import MainBackButton from "../components/primaryComponents/MainBackButton"
import MainRedirectButton from "../components/primaryComponents/MainRedirectButton"
import MainTitle from "../components/primaryComponents/MainTitle"

const NewEmailPage = () => {
  const history = useHistory()
  const handleHistory = history.goBack()

  return (
    <div>
      <div>
        <Row>
          <MainBackButton onClick={handleHistory} />
          <MainTitle title="Réinitialisez votre identifiant" />
        </Row>
      </div>
      <Form>
        <FormGroup controlId="formBasicEmail">
          <FormLabel>Rentrez votre nouvel identifiant</FormLabel>
          <FormControl
            size="lg"
            type="email"
            placeholder="Entrez votre nouvel adresse email"
          />
        </FormGroup>

        <FormGroup controlId="formBasicEmail">
          <FormLabel>Confirmez votre nouvel identifiant</FormLabel>
          <FormControl
            size="lg"
            type="email"
            placeholder="Confirmez votre adresse email"
          />
        </FormGroup>
      </Form>
      <MainRedirectButton to="/login" />
    </div>
  )
}

export default NewEmailPage
