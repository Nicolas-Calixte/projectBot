import React, { useContext } from "react";

import ButtonConfirm from "./primaryComponents/ButtonConfirm";

const ButtonLogIn = () => {
  const { logInHandleClick } = useContext(Context);

  return <ButtonConfirm to="/subscribe-options" onClick={logInHandleClick} />;
};

export default ButtonLogIn;
