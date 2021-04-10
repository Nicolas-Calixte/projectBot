import React from "react"
import { Badge } from "react-bootstrap"
import PropTypes from "prop-types"

const MainTitle = (props) => {
  const { size, title } = props
  return (
    <h1 style={{ marginBottom: "35px" }}>
      <Badge size={size} variant="info">
        {title}
      </Badge>
    </h1>
  )
}

MainTitle.propTypes = {
  title: PropTypes.string,
  size: PropTypes.string,
}

export default MainTitle
