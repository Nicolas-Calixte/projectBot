import { Form, FormGroup, FormLabel, FormControl } from "react-bootstrap";

const mainForm = (props) => {
  const { controlId, label, type, placeholder } = props;

  return (
    <Form>
      <FormGroup controlId={controlId}>
        <FormLabel>{label}</FormLabel>
        <FormControl type={type} placeholder={placeholder} />
      </FormGroup>
    </Form>
  );
};

export default mainForm;
