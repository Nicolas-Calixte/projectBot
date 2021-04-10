import React from "react"
import { Row } from "react-bootstrap"
import { useHistory } from "react-router"

import MainBackButton from "../components/primaryComponents/MainBackButton"
import MainButton from "../components/primaryComponents/MainButton"
import MainFormGroup from "../components/primaryComponents/MainFormGroup"
import MainTitle from "../components/primaryComponents/MainTitle"

const ResetPasswordPage = () => {
  const history = useHistory()

  const handleHistory = () => history.push("/login")

  return (
    <div
      style={{ display: "flex", alignItems: "center", flexDirection: "column" }}
    >
      <div>
        <Row>
          <MainBackButton onClick={handleHistory} />
          <MainTitle size="lg" title="Réinitialisez votre mot de passe" />
        </Row>
      </div>
      <MainFormGroup
        controlId="email/phone number"
        label="Identifiant"
        size="md"
        type="email"
        placeholder="Entrez votre email ou n° de téléphone"
      />
      <MainButton to="/verificationcode" />
    </div>
  )
}

export default ResetPasswordPage
