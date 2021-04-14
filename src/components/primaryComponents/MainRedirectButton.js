import React from "react"
import { Redirect } from "react-router"
import PropTypes from "prop-types"

const MainRedirectButton = (props) => {
  const { to, onClick } = props

  return (
    <div>
      <a
        className="btn btn-info btn-lg"
        role="button"
        style={{ width: "155px" }}
        onClick={onClick}
        active
      >
        <Redirect to={to} />{" "}
      </a>
    </div>
  )
}

MainRedirectButton.propTypes = {
  to: PropTypes.string,
  onClick: PropTypes.string,
}

export default MainRedirectButton
