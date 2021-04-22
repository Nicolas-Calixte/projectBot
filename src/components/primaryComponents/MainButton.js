import React from "react"
import PropTypes from "prop-types"

import { Button } from "react-bootstrap"

const MainButton = (props) => {
  const { variant, size, onClick, btnName } = props

  return (
    <Button variant={variant} size={size} onClick={onClick} block>
      {btnName}
    </Button>
  )
}

MainButton.propTypes = {
  variant: PropTypes.string,
  size: PropTypes.string,
  onClick: PropTypes.string,
  btnName: PropTypes.string,
}

export default MainButton
