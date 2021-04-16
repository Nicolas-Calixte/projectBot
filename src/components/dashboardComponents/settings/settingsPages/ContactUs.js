import React from "react"
import { Form, FormControl, FormGroup, FormLabel, Row } from "react-bootstrap"
import { useHistory } from "react-router"
import MainBackButton from "../../../primaryComponents/MainBackButton"
import MainButton from "../../../primaryComponents/MainButton"
import MainTitle from "../../../primaryComponents/MainTitle"

const ContactUs = () => {
  const history = useHistory()
  const handleHistory = () => history.goBack()

  return (
    <div
      style={{ display: "flex", alignItems: "center", flexDirection: "column" }}
    >
      <div>
        <Row>
          <MainBackButton onClick={handleHistory} />
          <MainTitle title="Contactez nous" />
        </Row>
      </div>
      <Form>
        <FormGroup controlId="formMessageObject">
          <FormLabel>Objet :</FormLabel>
          <FormControl
            style={{ width: "450px" }}
            type="text"
            placeholder="Rentrez l'objet de votre message"
          />
        </FormGroup>
        <FormGroup controlId="formMessage">
          <FormLabel>Message :</FormLabel>
          <FormControl
            as="textarea"
            rows={20}
            placeholder="Saissisez votre message"
          />
        </FormGroup>
      </Form>
      <MainButton to="/dashboard/settings" />
    </div>
  )
}

export default ContactUs
