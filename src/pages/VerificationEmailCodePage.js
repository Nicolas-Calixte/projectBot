import React from "react"
import { Row } from "react-bootstrap"
import { useHistory } from "react-router"

import MainBackButton from "../components/primaryComponents/MainBackButton"
import MainTitle from "../components/primaryComponents/MainTitle"
import MainFormGroup from "../components/primaryComponents/MainFormGroup"
import MainButton from "../components/primaryComponents/MainButton"

const VerificationEmailCodePage = () => {
  const history = useHistory()
  const handleHistory = history.goBack()

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
        <MainButton to="/login/resetemail/verificationemailcode/newemail" />
      </div>
    </div>
  )
}

export default VerificationEmailCodePage
