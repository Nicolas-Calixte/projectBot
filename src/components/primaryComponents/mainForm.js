import React from "react"
import {
  Form,
  FormGroup,
  FormLabel,
  FormControl,
  FormText,
} from "react-bootstrap"

const mainForm = (props) => {
  const { controlId, label, type, placeholder, text } = props

  return (
    <div>
      <Form>
        <FormGroup controlId={controlId}>
          <FormLabel>{label}</FormLabel>
          <FormControl type={type} placeholder={placeholder} />
          <FormText>{text}</FormText>
        </FormGroup>
      </Form>
    </div>
  )
}

export default mainForm
