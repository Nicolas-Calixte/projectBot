import React from "react"
import { Link } from "react-router-dom"

const CreateAccountLine = () => {
  return (
    <p>
      Vous ne possédez pas de compte ? <Link to="/signup">Inscrivez-vous</Link>{" "}
      !
    </p>
  )
}

export default CreateAccountLine
