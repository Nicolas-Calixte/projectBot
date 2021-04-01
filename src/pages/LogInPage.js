import React from "react"

import ConnexionTitle from "../components/ConnexionTitle"
import InputLogInPage from "../components/ConnexionTitle"
import ButtonLogIn from "../components/ButtonLogIn"
import CreateAccountLine from "../components/CreateAccountLine"
import LinksLogInPage from "../components/LinksLogInPage"

const LogInPage = () => {
  return (
    <div>
      <ConnexionTitle />
      <InputLogInPage />
      <CreateAccountLine />
      <ButtonLogIn />
      <LinksLogInPage />
    </div>
  )
}

export default LogInPage
