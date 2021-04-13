import React from "react"
import { Row } from "react-bootstrap"

import MainBackButton from "../components/primaryComponents/MainBackButton"
import MainButton from "../components/primaryComponents/MainButton"
import MainFormGroup from "../components/primaryComponents/MainFormGroup"
import MainTitle from "../components/primaryComponents/MainTitle"

const ResetEmailPage = () => {
  const handleHistory = () => history.goBack()
  const handleClick = () =>
    history.push("/login/resetemail/verificationemailcode")

  return (
    <div
      style={{ display: "flex", alignItems: "center", flexDirection: "column" }}
    >
      <div>
        <Row>
          <MainBackButton onClick={handleHistory} />
          <MainTitle size="lg" title="Réinitialisez votre identifiant" />
        </Row>
      </div>
      <MainFormGroup
        controlId="basicPhoneNumberForm"
        label="Entrez le n° de téléphone associé à votre compte"
        size="md"
        type="phoneNumber"
        placeholder="Entrez votre n° de téléphone"
      />
      <p style={{ marginTop: "15px", marginBottom: "0px" }}>
        Un code de validation va vous être envoyé.
      </p>
      <p>
        Vous n&apos;avez pas associé de n° de téléphone à votre compte ?{" "}
        <a href="mailto:nicolascalixte.pro@gmail.com">Contactez le support</a>.{" "}
      </p>
      <MainButton onClick={handleClick} />
    </div>
  )
}

export default ResetEmailPage
