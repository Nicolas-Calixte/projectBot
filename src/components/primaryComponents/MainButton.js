import React from "react"
import { Button } from "react-bootstrap"
import { Link } from "react-router-dom"
import PropTypes from "prop-types"

const MainButton = (to) => {
  return (
    <Link to={to}>
      <Button className="align-content-center" size="lg" variant="info" active>
        CONFIRMER
      </Button>
    </Link>
  )
}

MainButton.PropTypes = {
  to: PropTypes.string,
}

export default MainButton
