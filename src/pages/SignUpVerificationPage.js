import React from "react"
import { Row } from "react-bootstrap"
import { useHistory } from "react-router"

import MainBackButton from "../components/primaryComponents/MainBackButton"
import MainButton from "../components/primaryComponents/MainButton"
import MainFormGroup from "../components/primaryComponents/MainFormGroup"
import MainTitle from "../components/primaryComponents/MainTitle"

const SignUpVerificationPage = () => {
  const history = useHistory()
  const handleHistory = history.goBack()

  return (
    <div
      style={{ display: "flex", alignItems: "center", flexDirection: "center" }}
    >
      <div>
        <Row>
          <MainBackButton onClick={handleHistory} />
          <MainTitle title="INSCRIPTION" />
        </Row>
      </div>
      <MainFormGroup
        size="md"
        controlId="formBasicCode"
        label="Code de validation"
        placeholder="Rentrez votre code à 6 chiffres"
      />
      <MainButton to="/subscribeoptions" />
    </div>
  )
}

export default SignUpVerificationPage
