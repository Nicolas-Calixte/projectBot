import React from "react"
import { Row } from "react-bootstrap"
import { useHistory } from "react-router"

import MainBackButton from "../components/primaryComponents/MainBackButton"
import MainButton from "../components/primaryComponents/MainButton"
import MainFormGroup from "../components/primaryComponents/MainFormGroup"
import MainTitle from "../components/primaryComponents/MainTitle"

const ResetPasswordPage = () => {
  const goBack = useHistory()
  const nextPage = useHistory()

  const handleHistory = () => goBack.push("/login")
  const handleClick = () =>
    nextPage.push("/login/resetpassword/verificationpasswordcode")

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
      <MainButton onClick={handleClick} />
    </div>
  )
}

export default ResetPasswordPage
