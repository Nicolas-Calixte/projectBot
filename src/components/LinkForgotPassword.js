import React from "react";

import LinkInitialComponent from "./primaryComponents/LinkInitialComponent";

const LinkForgotPassword = () => {
  return (
    <LinkInitialComponent to="/resetPassword" linkName="Mot de passe oublié" />
  );
};

export default LinkForgotPassword;
