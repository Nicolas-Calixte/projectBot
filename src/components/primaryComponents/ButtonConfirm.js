import React from "react"
import { Button } from "react-bootstrap"
import { Link } from "react-router-dom"

const ButtonConfirm = (props) => {
  const { to, onClick, btnName } = props

  return (
    <Link to={to}>
      <Button variant="info" onClick={onClick}>
        {btnName}
      </Button>
    </Link>
  )
}

export default ButtonConfirm
