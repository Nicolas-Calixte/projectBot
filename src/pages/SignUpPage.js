import React from "react"
import { Row } from "react-bootstrap"
import { useHistory } from "react-router"

import MainBackButton from "../components/primaryComponents/MainBackButton"
import MainButton from "../components/primaryComponents/MainButton"
import MainTitle from "../components/primaryComponents/MainTitle"
import FormSignUp from "../components/signUpPageComponents/FormSignUp"

const SignUpPage = () => {
  const history = useHistory()

  const handleHistory = () => history.goBack()
  const handleClick = () => history.push("/subscribeoptions")

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <div>
        <Row>
          <MainBackButton onClick={handleHistory} />
          <MainTitle title="INSCRIPTION" />
        </Row>
      </div>
      <FormSignUp />
      <MainButton onClick={handleClick} />
    </div>
  )
}

export default SignUpPage
