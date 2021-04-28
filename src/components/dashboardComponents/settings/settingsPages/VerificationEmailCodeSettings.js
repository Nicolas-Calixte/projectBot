import React, { useCallback } from "react"
import { useHistory } from "react-router-dom"
import {
  Button,
  Col,
  Form,
  FormControl,
  FormLabel,
  FormText,
  Row,
} from "react-bootstrap"

import Page, { PageContent, PageHeader } from "../../../Page"

const VerificationEmailCodeSettings = () => {
  const history = useHistory()
  const handleSubmit = useCallback(() => {
    // if (creds === ok)

    history.push(
      "/dashboard/settings/reset-email/verification-email-code/new-email"
    )
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
                <FormLabel>Réinitialiser l'identifiant</FormLabel>
                <FormControl
                  controlId="formBasicNumber"
                  size="md"
                  type="number"
                  placeholder="Rentrez votre code à 6 chiffres"
                />
                <FormText className="mb-3">
                  Code non reçu ? <a href="#">Renvoyez un nouveau code</a>.
                </FormText>
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

export default VerificationEmailCodeSettings
