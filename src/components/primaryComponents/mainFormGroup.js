import { FormGroup, FormLabel, FormControl } from "react-bootstrap";

const mainFormGroup = (props) => {
  const { controlId, label, size, type, placeholder } = props;

  return (
    <FormGroup controlId={controlId}>
      <FormLabel>{label}</FormLabel>
      <FormControl size={size} type={type} placeholder={placeholder} />
    </FormGroup>
  );
};

export default mainFormGroup;
