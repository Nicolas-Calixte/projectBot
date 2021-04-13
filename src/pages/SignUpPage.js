import React from "react"
import { Container, Row } from "react-bootstrap"
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
        <Container>
          <Row>
            <MainBackButton onClick={handleHistory} />
            <MainTitle title="INSCRIPTION" />
          </Row>
        </Container>
        <FormSignUp />
        <MainButton to="/subscribeoptions" />
      </div>
    </div>
  )
}

export default SignUpPage
