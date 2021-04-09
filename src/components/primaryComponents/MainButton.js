import React from "react"
import { Button } from "react-bootstrap"
import { Link } from "react-router-dom"
import PropTypes from "prop-types"

const MainButton = (to) => {
  return (
    <div style={{ marginTop: "20px" }}>
      <Link to={to}>
        <Button
          className="align-content-center"
          size="lg"
          variant="info"
          active
        >
          CONFIRMER
        </Button>
      </Link>
    </div>
  )
}

MainButton.PropTypes = {
  to: PropTypes.string,
}

export default MainButton
