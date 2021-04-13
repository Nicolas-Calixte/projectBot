import React from "react"
import { Row } from "react-bootstrap"

import MainBackButton from "../components/primaryComponents/MainBackButton"
import MainButton from "../components/primaryComponents/MainButton"
import MainFormGroup from "../components/primaryComponents/MainFormGroup"
import MainTitle from "../components/primaryComponents/MainTitle"

const VerificationPasswordCodePage = () => {
  const handleHistory = () => history.goBack()
  const handleClick = () =>
    history.push("/login/resetpassword/verificationpasswordcode/newpassword")

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
      <MainFormGroup
        controlId="basicNumberForm"
        label="Entrez le code de validation"
        size="md"
        type="code"
        placeholder="Entrez le code à 6 chiffres"
      />
      <p>
        Code non reçu ? <a href="#">Renvoyez le code</a>.
      </p>
      <MainButton onClick={handleClick} />
    </div>
  )
}

export default VerificationPasswordCodePage
