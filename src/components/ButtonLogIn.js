import React, { useContext } from "react";

import ButtonConfirm from "./primaryComponents/ButtonConfirm";
import Context from "./Context";

const ButtonLogIn = () => {
  const { logInHandleClick } = useContext(Context);

  return <ButtonConfirm to="/subscribe-options" onClick={logInHandleClick} />;
};

export default ButtonLogIn;
