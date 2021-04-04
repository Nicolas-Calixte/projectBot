import React from "react"

import ConnexionTitle from "../components/ConnexionTitle"
import FormLogIn from "../components/FormLogIn"
import CreateAccountLine from "../components/CreateAccountLine"
import ButtonLogIn from "../components/ButtonLogIn"
import LinksLogInPage from "../components/LinksLogInPage"

const LogInPage = () => {
  return (
    <div>
      <ConnexionTitle />
      <FormLogIn />
      <CreateAccountLine />
      <ButtonLogIn />
      <LinksLogInPage />
    </div>
  )
}

export default LogInPage
