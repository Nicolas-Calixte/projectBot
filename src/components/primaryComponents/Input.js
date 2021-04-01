import React from "react"
import { Form, FormGroup, FormControl, FormLabel } from "react-bootstrap"

const Input = (props) => {
  const { controlId, label, type, placeholder } = props

  return (
    <Form>
      <FormGroup controlId={controlId}>
        <FormLabel>{label}</FormLabel>
        <FormControl type={type} placeholder={placeholder} />
      </FormGroup>
    </Form>
  )
}

export default Input
