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

const ResetEmailSettings = () => {
  const history = useHistory()
  const handleSubmit = useCallback(() => {
    // if (creds === ok)

    history.push("/dashboard/settings/reset-email/verification-email-code")
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
                <FormGroup controlId="basicPhoneNumberForm">
                  <FormLabel>Entrez votre n° de téléphone</FormLabel>
                  <FormControl
                    size="md"
                    type="phoneNumber"
                    placeholder="Entrez le n° de téléphone associé à votre compte"
                  />
                </FormGroup>
                <FormText className="mb-3">
                  Un code de validation va vous être envoyé.
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
              <div className="d-flex align-items-center justify-content-center mt-3">
                <p>
                  Vous n&apos;avez pas associé de n° de téléphone à votre compte
                  ?{" "}
                  <a href="mailto:nicolascalixte.pro@gmail.com">
                    Contactez le support
                  </a>
                  .{" "}
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </PageContent>
    </Page>
  )
}

export default ResetEmailSettings
