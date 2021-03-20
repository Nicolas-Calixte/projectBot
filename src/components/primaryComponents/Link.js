import React from "react";

import { Link } from "react-router-dom";
import { NavLink, Nav, NavItem } from "react-bootstrap";

const Link = (props) => {
  const { to, linkName } = props;

  return (
    <NavLink variant="info">
      <Link to={to}>{linkName}</Link>
    </NavLink>
  );
};

export default Link;
