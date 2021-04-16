import React from "react"
import { Nav, NavItem, Row } from "react-bootstrap"
import { useHistory } from "react-router-dom"
import MainBackButton from "../../primaryComponents/MainBackButton"
import MainTitle from "../../primaryComponents/MainTitle"
import SettingsButton from "./SettingsButton"

const Settings = () => {
  const history = useHistory()
  const handleHistory = () => history.goBack()

  return (
    <div
      style={{ display: "flex", alignItems: "center", flexDirection: "column" }}
    >
      <Row>
        <MainBackButton onClick={handleHistory} />
        <MainTitle title="Paramètres" />
      </Row>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          minHeight: "60vh",
        }}
      >
        <Nav className="flex-column justify-content-center">
          <NavItem style={{ borderBottom: "2px solid black" }}>
            <SettingsButton
              to="/dashboard/settings/resetemail"
              btnName="Changer mon identifiant"
            />
          </NavItem>
          <NavItem style={{ borderBottom: "2px solid black" }}>
            <SettingsButton
              to="/dashboard/settings/resetpassword"
              btnName="Changer mon mot de passe"
            />
          </NavItem>
          <NavItem style={{ borderBottom: "2px solid black" }}>
            <SettingsButton
              to="/dashboard/settings/contactus"
              btnName="Nous contacter"
            />
          </NavItem>
          <NavItem>
            <SettingsButton
              to="/dashboard/settings/logout"
              btnName="Déconnexion"
            />
          </NavItem>
          <NavItem></NavItem>
        </Nav>
      </div>
    </div>
  )
}

export default Settings
