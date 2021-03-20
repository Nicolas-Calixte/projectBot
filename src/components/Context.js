import React, { createContext } from "react";

export const Provider = (props) => {
  const logInHandleClick = () => null;

  return <Context.Provider {...props} value={{ logInHandleClick }} />;
};

const Context = createContext();
