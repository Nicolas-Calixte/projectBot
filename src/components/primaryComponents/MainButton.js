import React from "react"
import PropTypes from "prop-types"
import { Button } from "react-bootstrap"

const MainButton = (props) => {
  const { onClick } = props

  return (
    <Button variant="primary" onClick={onClick}>
      CONFIRMER
    </Button>
  )
}

MainButton.propTypes = {
  to: PropTypes.string,
  onClick: PropTypes.string,
}

export default MainButton
