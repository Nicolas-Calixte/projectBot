import React from "react"
import { Nav, NavItem } from "react-bootstrap"
import { Link } from "react-router-dom"

const LinksLogInPage = () => {
  return (
    <div>
      <Nav row className="justify-content-center mt-50">
        <NavItem>
          <Link to="/resetPassword">Mot de passe oublié</Link>
        </NavItem>
        <NavItem>
          <Link to="/resetEmail">Identifiant oublié</Link>
        </NavItem>
      </Nav>
    </div>
  )
}

export default LinksLogInPage
