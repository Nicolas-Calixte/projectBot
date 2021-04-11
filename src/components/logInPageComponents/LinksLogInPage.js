import React from "react"
import { Nav, NavItem } from "react-bootstrap"
import { Link } from "react-router-dom"

const LinksLogInPage = () => {
  return (
    <div style={{ marginTop: "20px" }}>
      <Nav row className="justify-content-center">
        <NavItem>
          <Link to="/login/resetpassword">Mot de passe oublié</Link>
        </NavItem>
        <NavItem>
          <Link to="/login/resetemail">Identifiant oublié</Link>
        </NavItem>
      </Nav>
    </div>
  )
}

export default LinksLogInPage
