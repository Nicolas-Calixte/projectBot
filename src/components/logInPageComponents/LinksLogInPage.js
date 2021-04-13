import React from "react"
import { Nav, NavItem } from "react-bootstrap"
import { Link } from "react-router-dom"

const LinksLogInPage = () => {
  return (
    <div style={{ marginTop: "40px" }}>
      <Nav row>
        <NavItem style={{ marginRight: "50px" }}>
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
