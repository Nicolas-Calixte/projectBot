import React from "react"
import { Form, FormControl, FormGroup, FormLabel } from "react-bootstrap"
import PropTypes from "prop-types"

const MainFormGroup = (props) => {
  const { controlId, label, size, type, placeholder } = props

  return (
    <div>
      <Form>
        <FormGroup controlId={controlId}>
          <FormLabel>{label}</FormLabel>
          <FormControl size={size} type={type} placeholder={placeholder} />
        </FormGroup>
      </Form>
    </div>
  )
}

MainFormGroup.propTypes = {
  controlId: PropTypes.string,
  label: PropTypes.string,
  size: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string,
}

export default MainFormGroup
