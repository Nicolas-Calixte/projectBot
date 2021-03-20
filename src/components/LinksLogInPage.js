import React from "react";

import LinkForgotPassword from "./LinkForgotPassword";
import LinkForgotEmail from "./LinkForgotEmail";
import { Nav, NavItem } from "react-bootstrap";

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
  );
};

export default LinksLogInPage;
