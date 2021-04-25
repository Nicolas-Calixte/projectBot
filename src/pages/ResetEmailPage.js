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

import Page, { PageContent, PageHeader } from "../components/Page"

const ResetEmailPage = () => {
  const history = useHistory()
  const handleSubmit = useCallback(() => {
    // if (creds === ok)

    history.push("/log-in/reset-email/verification-email-code")
  })
  return (
    <Page>
      <PageHeader>Réinitialiser mon identifiant</PageHeader>
      <PageContent className="d-flex align-items-center justify-content-center">
        <Row className="mt-3">
          <Col>
            <Form>
              <FormGroup>
                <FormLabel>Entrez votre numéro de téléphone</FormLabel>
                <FormControl
                  size="md"
                  type="phoneNumber"
                  placeholder="Entrez le n° de téléphone associé à votre compte "
                />
                <FormText>Un code de validation va vous être envoyé.</FormText>
              </FormGroup>
              <Button size="lg" variant="primary" onClick={handleSubmit} block>
                Confirmer
              </Button>
            </Form>

            <p className="mt-3">
              Vous n&apos;avez pas associé de n° de téléphone à votre compte ?{" "}
              <a href="mailto:nicolascalixte.pro@gmail.com">
                Contactez le support
              </a>
              .{" "}
            </p>
          </Col>
        </Row>
      </PageContent>
    </Page>
  )
}

export default ResetEmailPage
