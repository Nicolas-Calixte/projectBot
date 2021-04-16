import React from "react"
import { Form, FormControl, FormGroup, FormLabel, Row } from "react-bootstrap"
import { useHistory } from "react-router"

import MainBackButton from "../../../primaryComponents/MainBackButton"
import MainButton from "../../../primaryComponents/MainButton"
import MainTitle from "../../../primaryComponents/MainTitle"

const NewEmailSettings = () => {
  const history = useHistory()
  const handleHistory = () => history.goBack()

  return (
    <div
      style={{ display: "flex", alignItems: "center", flexDirection: "column" }}
    >
      <div>
        <Row>
          <MainBackButton onClick={handleHistory} />
          <MainTitle title="Réinitialisez votre identifiant" />
        </Row>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          minHeight: "60vh",
        }}
      >
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
        <MainButton to="/dashboard/settings" />
      </div>
    </div>
  )
}

export default NewEmailSettings
