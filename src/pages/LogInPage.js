import React, { useCallback } from "react"
import {
  Form,
  FormControl,
  FormGroup,
  FormLabel,
  Row,
  Col,
  Button,
} from "react-bootstrap"

import Page, { PageContent, PageHeader } from "../components/Page"
import { Link, useHistory } from "react-router-dom"

const LogInPage = () => {
  const history = useHistory()
  const handleSubmit = useCallback(() => {
    // if (creds === ok)

    history.push("/dashboard")
  })

  return (
    <Page style={{ display: "flex", alignItems: "center" }}>
      <PageHeader noBack>Sign In</PageHeader>
      <PageContent>
        <Form>
          <Row className="mt-2 mb-2">
            <Col>
              <FormGroup controlId="formBasicEmail">
                <FormLabel>Email</FormLabel>
                <FormControl
                  size="lg"
                  type="email"
                  placeholder="Entrez votre adresse email"
                />
              </FormGroup>
            </Col>
          </Row>

          <Row className="mb-2">
            <Col>
              <FormGroup controlId="formBasicPassword">
                <FormLabel>Mot de passe</FormLabel>
                <FormControl
                  size="lg"
                  type="password"
                  placeholder="Entrez votre mot de passe"
                />
              </FormGroup>
            </Col>
          </Row>
        </Form>

        <Row className="text-center mb-4">
          <Col>
            Don't have an account? <Link to="/sign-up">Sign up</Link>!
          </Col>
        </Row>

        <Row className="mb-2">
          <Col>
            <Button size="lg" variant="primary" onClick={handleSubmit} block>
              Sign In
            </Button>
          </Col>
        </Row>

        <Row className="d-flex space-around mt-3 mb-2">
          <Col>
            <Link to="/log-in/reset-password">Forgot password</Link>
          </Col>
          <Col>
            <Link to="/log-in/reset-email">Forgot username</Link>
          </Col>
        </Row>
      </PageContent>
    </Page>
  )
}

export default LogInPage
