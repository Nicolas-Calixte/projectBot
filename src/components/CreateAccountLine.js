import React from "react";

import LinkInitialComponent from "./primaryComponents/LinkInitialComponent";

const CreateAccountLine = () => {
  return (
    <p>
      Vous n'êtes pas de compte ?
      <LinkInitialComponent to="/sign-up" linkName=" Inscrivez-vous" /> !
    </p>
  );
};

export default CreateAccountLine;
