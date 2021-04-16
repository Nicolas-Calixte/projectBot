import React from "react"
import { Link } from "react-router-dom"
import PropTypes from "prop-types"

const SettingsButton = (props) => {
  const { to, btnName } = props

  return (
    <div>
      <Link
        className="btn btn-link btn-md"
        role="button"
        style={{ width: "250px" }}
        to={to}
      >
        {btnName}
      </Link>
    </div>
  )
}

SettingsButton.propTypes = {
  to: PropTypes.string,
  btnName: PropTypes.string,
}

export default SettingsButton
