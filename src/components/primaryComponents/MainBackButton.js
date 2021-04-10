import React from "react"
import { Badge } from "react-bootstrap"
import PropTypes from "prop-types"

const MainBackButton = (props) => {
  const { onClick } = props

  return (
    <h1 style={{ fontWeight: "bold", cursor: "pointer" }}>
      <Badge variant="info" size="lg" onClick={onClick}>
        &lt;
      </Badge>
    </h1>
  )
}

MainBackButton.propTypes = {
  onClick: PropTypes.string,
}

export default MainBackButton
