import React from "react";

import { Link } from "react-router-dom";
import { NavLink } from "react-bootstrap";

const LinkInitialComponent = (props) => {
  const { to, linkName } = props;

  return (
    <NavLink variant="info">
      <Link to={to}>{linkName}</Link>
    </NavLink>
  );
};

export default LinkInitialComponent;
