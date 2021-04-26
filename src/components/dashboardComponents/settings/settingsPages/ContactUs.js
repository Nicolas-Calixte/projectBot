import React, { useCallback } from "react"
import { useHistory } from "react-router-dom"
import {
  Button,
  Col,
  Form,
  FormControl,
  FormGroup,
  FormLabel,
} from "react-bootstrap"

import Page, { PageContent, PageHeader } from "../../../Page"

const ContactUs = () => {
  const history = useHistory()
  const handleSubmit = useCallback(() => {
    // if (creds === ok)

    history.push("/dashboard/settings")
  })

  return (
    <Page>
      <PageHeader>Nous contacter</PageHeader>
      <PageContent>
        <Col className="d-flex align-items-center justify-content-center mt-2">
          <Form>
            <FormGroup controlId="formMessageObject">
              <FormLabel>Objet :</FormLabel>
              <FormControl
                size="lg"
                type="text"
                placeholder="Rentrez l'objet de votre message"
              />
            </FormGroup>
            <FormGroup controlId="formMessage">
              <FormLabel>Message :</FormLabel>
              <FormControl
                size="lg"
                as="textarea"
                rows={20}
                placeholder="Saissisez votre message"
              />
            </FormGroup>
            <Button size="lg" variant="primary" onClick={handleSubmit} block>
              Envoyer
            </Button>
          </Form>
        </Col>
      </PageContent>
    </Page>
  )
}

export default ContactUs
