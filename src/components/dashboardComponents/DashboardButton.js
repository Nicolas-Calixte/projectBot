import React from "react"
import { Link } from "react-router-dom"
import PropTypes from "prop-types"

const DashboardButton = (props) => {
  const { to, btnName } = props

  return (
    <div>
      <Link
        className="btn btn-info btn-lg"
        role="button"
        style={{ width: "140px", marginTop: "10px" }}
        to={to}
        active
      >
        {btnName}
      </Link>
    </div>
  )
}

DashboardButton.propTypes = {
  to: PropTypes.string,
  btnName: PropTypes.string,
}

export default DashboardButton
