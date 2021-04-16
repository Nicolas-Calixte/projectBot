import React from "react"
import { Row } from "react-bootstrap"
import { useHistory } from "react-router-dom"

import MainBackButton from "../../../primaryComponents/MainBackButton"
import MainButton from "../../../primaryComponents/MainButton"
import MainFormGroup from "../../../primaryComponents/MainFormGroup"
import MainTitle from "../../../primaryComponents/MainTitle"

const ResetEmailSettings = () => {
  const history = useHistory()
  const handleHistory = () => history.goBack()

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
          <a href="mailto:nicolascalixte.pro@gmail.com">Contactez le support</a>
          .{" "}
        </p>
        <MainButton to="/dashboard/settings/resetemail/verificationemailcode" />
      </div>
    </div>
  )
}

export default ResetEmailSettings
