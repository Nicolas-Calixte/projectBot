import React from "react"

import MainButton from "../components/primaryComponents/MainButton"
import MainTitle from "../components/primaryComponents/MainTitle"
import FormSignUp from "../components/signUpPageComponents/FormSignUp"

const SignUpPage = () => {
  return (
    <div>
      <MainTitle title="INSCRIPTION" />
      <FormSignUp />
      <MainButton to="/subscribe-options" />
    </div>
  )
}

export default SignUpPage
