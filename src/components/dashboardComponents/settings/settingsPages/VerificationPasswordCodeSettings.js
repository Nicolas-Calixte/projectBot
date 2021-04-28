import React, { useCallback } from "react"
import { useHistory } from "react-router-dom"
import {
  Button,
  Col,
  Form,
  FormControl,
  FormGroup,
  FormLabel,
  FormText,
  Row,
} from "react-bootstrap"

import Page, { PageContent, PageHeader } from "../../../Page"

const VerificationPasswordCodeSettings = () => {
  const history = useHistory()
  const handleSubmit = useCallback(() => {
    // if (creds === ok)

    history.push(
      "/dashboard/settings/reset-password/verification-password-code/new-password"
    )
  })

  return (
    <Page>
      <PageHeader>Réinitialiser mon mot de passe</PageHeader>
      <PageContent className="d-flex align-items-center justify-content-center">
        <Row className="mt-3">
          <Col>
            <div
              style={{
                minHeight: "60vh",
              }}
            >
              <Form>
                <FormGroup controlId="basicNumberForm">
                  <FormLabel>Entrez le code de validation</FormLabel>
                  <FormControl
                    size="md"
                    type="number"
                    placeholder="Entrez le code à 6 chiffres"
                  />
                  <FormText>
                    Code non reçu ? <a href="#">Renvoyez le code</a>.
                  </FormText>
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

export default VerificationPasswordCodeSettings
