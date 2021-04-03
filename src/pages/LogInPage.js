import React from "react"

import ConnexionTitle from "../components/ConnexionTitle"
import ButtonLogIn from "../components/ButtonLogIn"
import CreateAccountLine from "../components/CreateAccountLine"
import LinksLogInPage from "../components/LinksLogInPage"
import mainFormGroup from "../components/primaryComponents/mainFormGroup"

const LogInPage = () => {
  return (
    <div>
      <ConnexionTitle />
      <mainFormGroup />
      <CreateAccountLine />
      <ButtonLogIn />
      <LinksLogInPage />
    </div>
  )
}

export default LogInPage
