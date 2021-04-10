import React from "react"

import FormLogIn from "../components/logInPageComponents/FormLogIn"
import CreateAccountLine from "../components/logInPageComponents/CreateAccountLine"
import MainTitle from "../components/primaryComponents/MainTitle"
import MainButton from "../components/primaryComponents/MainButton"
import LinksLogInPage from "../components/logInPageComponents/LinksLogInPage"

const LogInPage = () => {
  return (
    <div
      style={{ display: "flex", alignItems: "center", flexDirection: "column" }}
    >
      <MainTitle title="CONNEXION" />
      <FormLogIn />
      <CreateAccountLine />
      <MainButton to="/subscribeoptions" />
      <LinksLogInPage />
    </div>
  )
}

export default LogInPage
