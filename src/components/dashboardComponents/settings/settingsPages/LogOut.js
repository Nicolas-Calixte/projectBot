import React from "react"
import { Row } from "react-bootstrap"
import { Link, useHistory } from "react-router-dom"

import MainBackButton from "../../../primaryComponents/MainBackButton"
import MainTitle from "../../../primaryComponents/MainTitle"

const LogOut = () => {
  const history = useHistory()
  const handleHistory = () => history.goBack()

  return (
    <div
      style={{ display: "flex", alignItems: "center", flexDirection: "column" }}
    >
      <div>
        <Row>
          <MainBackButton onClick={handleHistory} />
          <MainTitle title="Déconnexion" />
        </Row>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          minHeight: "60vh",
        }}
      >
        <p>Souhaitez-vous vous déconnecter de l&apos;application ?</p>
        <Row>
          <Link
            className="btn btn-primary btn-md"
            role="button"
            style={{ width: "157px", padding: "20px", marginRight: "20px" }}
            to="/dashboard/settings"
          >
            Annuler
          </Link>
          <Link
            className="btn btn-danger btn-md"
            role="button"
            style={{ width: "157px", padding: "20px" }}
            to="/login"
          >
            Me déconnecter
          </Link>
        </Row>
      </div>
    </div>
  )
}

export default LogOut
