import React from "react";

import Link from "./primaryComponents/Link";

const CreateAccountLine = () => {
  return (
    <p>
      Vous n'êtes pas de compte ?
      <Link to="/sign-up" linkName=" Inscrivez-vous" /> !
    </p>
  );
};

export default CreateAccountLine;
