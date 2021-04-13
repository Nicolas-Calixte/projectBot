import React from "react"
import { Link } from "react-router-dom"
import PropTypes from "prop-types"

const MainButton = (props) => {
  const { to, onClick } = props

  return (
    <div style={{ marginTop: "20px" }}>
      <Link
        className="btn btn-info btn-lg"
        role="button"
        style={{ width: "155px" }}
        to={to}
        onClick={onClick}
        active
      >
        CONFIRMER
      </Link>
    </div>
  )
}

MainButton.propTypes = {
  to: PropTypes.string,
  onClick: PropTypes.string,
}

export default MainButton
