import React from "react"
import { Nav, NavItem } from "react-bootstrap"

import LinkForgotPassword from "./LinkForgotPassword"
import LinkForgotEmail from "./LinkForgotEmail"

const LinksLogInPage = () => {
  return (
    <Nav>
      <NavItem>
        <LinkForgotPassword />
      </NavItem>
      <NavItem>
        <LinkForgotEmail />
      </NavItem>
    </Nav>
  )
}

export default LinksLogInPage
