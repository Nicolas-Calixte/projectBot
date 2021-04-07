import React from "react"
import { Badge } from "react-bootstrap"
import PropTypes from "prop-types"

const MainTitle = (props) => {
  const { title } = props
  return (
    <h1>
      <Badge size="lg" variant="info">
        {title}
      </Badge>
    </h1>
  )
}

MainTitle.propTypes = {
  title: PropTypes.string,
}

export default MainTitle
