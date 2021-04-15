import React from "react"
import { Row } from "react-bootstrap"
import { useHistory } from "react-router"

import MainBackButton from "../components/primaryComponents/MainBackButton"
import MainButton from "../components/primaryComponents/MainButton"
import MainTitle from "../components/primaryComponents/MainTitle"
import FormSignUp from "../components/signUpPageComponents/FormSignUp"

const SignUpPage = () => {
  const history = useHistory()
  const handleHistory = () => history.push("/login")

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
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          minHeight: "60vh",
        }}
      >
        <FormSignUp />
        <p>Un code de validation va être envoyé à votre adresse email.</p>
        <MainButton to="/signup/signupverification" />
      </div>
    </div>
  )
}

export default SignUpPage
