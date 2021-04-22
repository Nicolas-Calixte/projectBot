import React, { useCallback } from "react"
import { useHistory } from "react-router-dom"
import {
  Form,
  FormGroup,
  FormLabel,
  FormControl,
  FormCheck,
  Col,
  Row,
  Button,
} from "react-bootstrap"

import Page, { PageContent, PageHeader } from "../components/Page"

const SignUpPage = () => {
  const history = useHistory()
  const handleSubmit = useCallback(() => {
    // if (creds === ok)

    history.push("/dashboard")
  })

  return (
    <Page>
      <PageHeader>Sign Up</PageHeader>
      <PageContent
        style={{ minHeight: "60vh" }}
        className="d-flex align-items-center justify-content-center gy-3"
      >
        <div>
          <Form>
            <Col>
              <Row className="d-flex space-between">
                <FormGroup controlId="formGridName">
                  <FormLabel>Nom</FormLabel>
                  <FormControl
                    size="lg"
                    type="name"
                    placeholder="Entrez votre nom"
                  />
                </FormGroup>

                <FormGroup controlId="formGridFirstname">
                  <FormLabel>Prénom</FormLabel>
                  <FormControl
                    size="lg"
                    type="firstname"
                    placeholder="Entrez votre prénom"
                  />
                </FormGroup>
              </Row>

              <Row>
                <FormGroup controlId="formGridEmail">
                  <FormLabel>Email</FormLabel>
                  <FormControl
                    size="lg"
                    type="email"
                    placeholder="Entrez votre adresse email"
                  />
                </FormGroup>

                <FormGroup controlId="FormGridPhoneNumber">
                  <FormLabel>Numéro de téléphone(optionnel)</FormLabel>
                  <FormControl
                    size="lg"
                    type="phone number"
                    placeholder="Entrez votre numéro de téléphone"
                  />
                </FormGroup>
              </Row>

              <Row>
                <FormGroup controlId="FormGridPassword">
                  <FormLabel>Mot de passe</FormLabel>
                  <FormControl
                    size="lg"
                    type="password"
                    placeholder="Créez votre mot de passe"
                  />
                </FormGroup>

                <FormGroup controlId="FormGridPassword">
                  <FormLabel>Confirmez le mot de passe</FormLabel>
                  <FormControl
                    size="lg"
                    type="password"
                    placeholder="Retapez votre mot de passe"
                  />
                </FormGroup>
              </Row>
              <FormCheck
                type="checkbox"
                name="cgu"
                id="cgu-check"
                label="J'accepte les conditions générales d'utilisation."
                className="text-center mb-3"
              />
            </Col>
          </Form>

          <Row>
            <Button size="lg" variant="primary" onClick={handleSubmit} block>
              Sign Up
            </Button>
          </Row>
          <p className="text-center mt-3">
            Un code de validation va être envoyé à votre adresse email.
          </p>
        </div>
      </PageContent>
    </Page>
  )
}

export default SignUpPage
