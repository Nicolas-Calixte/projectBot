import React from "react"
import { FormGroup, FormLabel, FormControl, FormText } from "react-bootstrap"

const mainFormGroup = (props) => {
  const { controlId, label, size, type, placeholder, text } = props

  return (
    <FormGroup controlId={controlId}>
      <FormLabel>{label}</FormLabel>
      <FormControl size={size} type={type} placeholder={placeholder} />
      <FormText>{text}</FormText>
    </FormGroup>
  )
}

export default mainFormGroup
