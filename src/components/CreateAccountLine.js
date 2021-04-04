import React from "react"

import mainLink from "./primaryComponents/mainLink"

const CreateAccountLine = () => {
  return (
    <p>
      Vous ne possédez pas de compte ?
      <mainLink to="/sign-up" linkName=" Inscrivez-vous" /> !
    </p>
  )
}

export default CreateAccountLine
