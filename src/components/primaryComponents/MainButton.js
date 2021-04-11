import React from "react"
import { Button } from "react-bootstrap"
import PropTypes from "prop-types"

const MainButton = (onClick) => {
  return (
    <div style={{ marginTop: "20px" }}>
      <Button size="lg" variant="info" onClick={onClick} active>
        CONFIRMER
      </Button>
    </div>
  )
}

MainButton.PropTypes = {
  onClick: PropTypes.string,
}

export default MainButton
