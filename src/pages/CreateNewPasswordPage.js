import React from "react"
import { Form, FormControl, FormGroup, FormLabel, Row } from "react-bootstrap"
import { useHistory } from "react-router"

import MainBackButton from "../components/primaryComponents/MainBackButton"
import MainButton from "../components/primaryComponents/MainButton"
import MainTitle from "../components/primaryComponents/MainTitle"

const CreateNewPasswordPage = () => {
  const history = useHistory()
  const handleHistory = () => history.goBack()

  return (
    <div
      style={{ display: "flex", alignItems: "center", flexDirection: "column" }}
    >
      <div>
        <Row>
          <MainBackButton onClick={handleHistory} />
          <MainTitle title="Réinitialisez votre mot de passe" />
        </Row>
      </div>
      <Form>
        <FormGroup controlId="formBasicPassword">
          <FormLabel>Nouveau mot de passe</FormLabel>
          <FormControl
            size="lg"
            type="password"
            placeholder="Rentrez votre nouveau mot de passe"
          />
        </FormGroup>

        <FormGroup controlId="formBasicPassword">
          <FormLabel>Confirmez le mot de passe</FormLabel>
          <FormControl
            size="lg"
            type="password"
            placeholder="Retapez votre mot de passe"
          />
        </FormGroup>
      </Form>
      <MainButton to="/login" />
    </div>
  )
}

export default CreateNewPasswordPage
