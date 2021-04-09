import React from "react"
import { Nav, NavItem } from "react-bootstrap"
import { Link } from "react-router-dom"

const LinksLogInPage = () => {
  return (
    <div style={{ marginTop: "20px" }}>
      <Nav row className="justify-content-center">
        <NavItem>
          <Link to="/reset-password">Mot de passe oublié</Link>
        </NavItem>
        <NavItem>
          <Link to="/reset-email">Identifiant oublié</Link>
        </NavItem>
      </Nav>
    </div>
  )
}

export default LinksLogInPage
