import React from "react"
import { Row } from "react-bootstrap"
import { useHistory } from "react-router-dom"

import MainBackButton from "../../../primaryComponents/MainBackButton"
import MainButton from "../../../primaryComponents/MainButton"
import MainFormGroup from "../../../primaryComponents/MainFormGroup"
import MainTitle from "../../../primaryComponents/MainTitle"

const VerificationEmailCodeSettings = () => {
  const history = useHistory()
  const handleHistory = () => history.goBack()

  return (
    <div
      style={{ display: "flex", alignItems: "center", flexDirection: "column" }}
    >
      <div>
        <Row>
          <MainBackButton onClick={handleHistory} />
          <MainTitle title="Réinitialiser votre identifiant" />
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
          controlId="formBasicNumber"
          size="md"
          label="Entrez le code de verification reçu"
          type="code"
          placeholder="Rentrez votre code à 6 chiffres"
        />
        <p>
          Code non reçu ? <a href="#">Renvoyez un code</a>.
        </p>
        <MainButton to="/dashboard/settings/resetemail/verificationemailcode/newemail" />
      </div>
    </div>
  )
}

export default VerificationEmailCodeSettings
