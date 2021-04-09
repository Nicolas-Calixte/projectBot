import React from "react"

import FormLogIn from "../components/FormLogIn"
import CreateAccountLine from "../components/CreateAccountLine"
import MainTitle from "../components/primaryComponents/MainTitle"
import MainButton from "../components/primaryComponents/MainButton"
import LinksLogInPage from "../components/LinksLogInPage"

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
