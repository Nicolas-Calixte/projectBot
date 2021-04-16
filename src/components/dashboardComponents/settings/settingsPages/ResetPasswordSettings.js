import React from "react"
import { Row } from "react-bootstrap"
import { useHistory } from "react-router"

import MainBackButton from "../../../primaryComponents/MainBackButton"
import MainButton from "../../../primaryComponents/MainButton"
import MainFormGroup from "../../../primaryComponents/MainFormGroup"
import MainTitle from "../../../primaryComponents/MainTitle"

const ResetPasswordSettings = () => {
  const history = useHistory()
  const handleHistory = () => history.goBack()

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
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          minHeight: "60vh",
        }}
      >
        <MainFormGroup
          controlId="email/phone number"
          label="Identifiant"
          size="md"
          type="email"
          placeholder="Entrez votre email ou n° de téléphone"
        />
        <MainButton to="/dashboard/settings/resetpassword/verificationpasswordcode" />
      </div>
    </div>
  )
}

export default ResetPasswordSettings
