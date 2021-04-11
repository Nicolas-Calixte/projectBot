import React from "react"
import { useHistory } from "react-router"

import FormLogIn from "../components/logInPageComponents/FormLogIn"
import CreateAccountLine from "../components/logInPageComponents/CreateAccountLine"
import MainTitle from "../components/primaryComponents/MainTitle"
import MainButton from "../components/primaryComponents/MainButton"
import LinksLogInPage from "../components/logInPageComponents/LinksLogInPage"

const LogInPage = () => {
  const history = useHistory()

  const handleClick = () => history.push("/subscribeoptions")

  return (
    <div
      style={{ display: "flex", alignItems: "center", flexDirection: "column" }}
    >
      <MainTitle title="CONNEXION" />
      <FormLogIn />
      <CreateAccountLine />
      <MainButton onClick={handleClick} />
      <LinksLogInPage />
    </div>
  )
}

export default LogInPage
