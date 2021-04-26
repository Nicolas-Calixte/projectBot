import React from "react"
import { Button, Col, Nav, NavItem } from "react-bootstrap"
import { useHistory } from "react-router-dom"

import Page, { PageContent, PageHeader } from "../../Page"

const Settings = () => {
  const history = useHistory()
  const handleHistory = () => history.push("/dashboard")

  const handleResetEmail = () => history.push("/dashboard/settings/reset-email")
  const handleResetPassword = () =>
    history.push("/dashboard/settings/reset-password")
  const handleContactUs = () => history.push("/dashboard/settings/contact-us")
  const handleLogOut = () => history.push("/dashboard/settings/log-out")

  return (
    <Page>
      <PageHeader noBack>
        <div>
          <span
            onClick={handleHistory}
            className="d-flex flex-start h2 position-absolute"
            style={{ cursor: "pointer" }}
          >
            ⬅︎
          </span>
          Paramètres
        </div>
      </PageHeader>
      <PageContent>
        <Col
          style={{ minHeight: "60vh" }}
          className="d-flex align-items-center justify-content-center"
        >
          <Nav className="flex-column justify-content-center">
            <NavItem style={{ borderBottom: "2px solid black" }}>
              <Button
                size="md"
                variant="link"
                onClick={handleResetEmail}
                className="w-100 p-3"
              >
                Changer mon identifiant
              </Button>
            </NavItem>
            <NavItem style={{ borderBottom: "2px solid black" }}>
              <Button
                size="md"
                variant="link"
                onClick={handleResetPassword}
                className="w-100 p-3"
              >
                Changer mon mot de passe
              </Button>
            </NavItem>
            <NavItem style={{ borderBottom: "2px solid black" }}>
              <Button
                size="md"
                variant="link"
                onClick={handleContactUs}
                className="w-100 p-3"
              >
                Nous contacter
              </Button>
            </NavItem>
            <NavItem style={{ borderBottom: "2px solid black" }}>
              <Button
                size="md"
                variant="link"
                onClick={handleLogOut}
                className="w-100 p-3"
              >
                Déconnexion
              </Button>
            </NavItem>
          </Nav>
        </Col>
      </PageContent>
    </Page>
  )
}

export default Settings
