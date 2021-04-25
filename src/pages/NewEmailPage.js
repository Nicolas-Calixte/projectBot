import React, { useCallback } from "react"
import {
  Button,
  Col,
  Form,
  FormControl,
  FormGroup,
  FormLabel,
  Row,
} from "react-bootstrap"
import { useHistory } from "react-router-dom"

import Page, { PageContent, PageHeader } from "../components/Page"

const NewEmailPage = () => {
  const history = useHistory()
  const handleSubmit = useCallback(() => {
    // if (creds === ok)

    history.push("/log-in")
  })

  return (
    <Page>
      <PageHeader>Réinitialiser mon identifiant</PageHeader>
      <PageContent className="d-flex align-items-center justify-content-center">
        <Row className="mt-3">
          <Col>
            <Form>
              <FormGroup controlId="formBasicEmail">
                <FormLabel>Rentrez votre nouvel identifiant</FormLabel>
                <FormControl
                  size="lg"
                  type="email"
                  placeholder="Entrez votre nouvel adresse email"
                />
              </FormGroup>

              <FormGroup controlId="formBasicEmail">
                <FormLabel>Confirmez votre nouvel identifiant</FormLabel>
                <FormControl
                  size="lg"
                  type="email"
                  placeholder="Confirmez votre adresse email"
                />
              </FormGroup>
              <Button size="lg" variant="primary" onClick={handleSubmit} block>
                Confirmer
              </Button>
            </Form>
          </Col>
        </Row>
      </PageContent>
    </Page>
  )
}

export default NewEmailPage
