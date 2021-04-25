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

const VerificationEmailCodePage = () => {
  const history = useHistory()
  const handleSubmit = useCallback(() => {
    // if (creds === ok)

    history.push("/log-in/reset-email/verification-email-code/new-email")
  })

  return (
    <Page>
      <PageHeader>Réinitialiser mon identifiant</PageHeader>
      <PageContent className="d-flex align-items-center justify-content-center">
        <Row className="mt-3">
          <Col>
            <Form>
              <FormGroup>
                <FormLabel>Entrez le code de vérification reçu</FormLabel>
                <FormControl
                  size="md"
                  type="code"
                  placeholder="Rentrez votre code à 6 chiffres"
                />
              </FormGroup>
              <Button size="lg" variant="primary" onClick={handleSubmit} block>
                Confirmer
              </Button>
            </Form>
            <p className="mt-3">
              Code non reçu ? <a href="#">Renvoyez un code</a>.
            </p>
          </Col>
        </Row>
      </PageContent>
    </Page>
  )
}

export default VerificationEmailCodePage
