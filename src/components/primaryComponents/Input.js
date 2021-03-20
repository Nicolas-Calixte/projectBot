import React from "react";
import { FormGroup, FormControl, FormLabel } from "react-bootstrap";

const Input = (props) => {
  const { label, type, placeholder } = props;

  return (
    <FormGroup>
      <FormLabel>{label}</FormLabel>
      <FormControl type={type} placeholder={placeholder} />
    </FormGroup>
  );
};

export default Input;
