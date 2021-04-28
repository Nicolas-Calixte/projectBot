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
import { useHistory } from "react-router"

import Page, { PageContent, PageHeader } from "../../../Page"

const NewEmailSettings = () => {
  const history = useHistory()
  const handleSubmit = useCallback(() => {
    // if (creds === ok)

    history.push("/dashboard/settings")
  })

  return (
    <Page>
      <PageHeader>Réinitialiser mon identifiant</PageHeader>
      <PageContent className="d-flex align-items-center justify-content-center">
        <Row className="mt-3">
          <Col>
            <div
              style={{
                minHeight: "60vh",
              }}
            >
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
                <Button
                  size="lg"
                  variant="primary"
                  onClick={handleSubmit}
                  block
                >
                  Confirmer
                </Button>
              </Form>
            </div>
          </Col>
        </Row>
      </PageContent>
    </Page>
  )
}

export default NewEmailSettings
