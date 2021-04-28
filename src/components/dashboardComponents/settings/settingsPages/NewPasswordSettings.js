import React, { useCallback } from "react"
import { useHistory } from "react-router-dom"
import {
  Button,
  Col,
  Form,
  FormControl,
  FormGroup,
  FormLabel,
  Row,
} from "react-bootstrap"

import Page, { PageContent, PageHeader } from "../../../Page"

const NewPasswordSettings = () => {
  const history = useHistory()
  const handleSubmit = useCallback(() => {
    // if (creds === ok)

    history.push("/dashboard/settings")
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
                <FormGroup controlId="formBasicPassword">
                  <FormLabel>Nouveau mot de passe</FormLabel>
                  <FormControl
                    size="lg"
                    type="password"
                    placeholder="Rentrez votre nouveau mot de passe"
                  />
                </FormGroup>

                <FormGroup controlId="formBasicConfirmPassword">
                  <FormLabel>Confirmez le mot de passe</FormLabel>
                  <FormControl
                    size="lg"
                    type="password"
                    placeholder="Retapez votre mot de passe"
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

export default NewPasswordSettings
