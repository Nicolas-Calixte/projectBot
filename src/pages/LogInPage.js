import React, { useCallback } from "react"
import {
  Button,
  Form,
  FormControl,
  FormGroup,
  FormLabel,
  Row,
  Col,
} from "react-bootstrap"

import Page, { PageContent, PageHeader } from "../components/Page"
import { useHistory } from "react-router"
import { Link } from "react-router-dom"

const LogInPage = () => {
  const history = useHistory()
  const handleSubmit = useCallback(() => {
    // if (creds === ok)

    history.push("/dashboard")
  })

  return (
    <Page>
      <PageHeader>Sign In</PageHeader>
      <PageContent className="align-items-center gy-3">
        <Form>
          <Row className="mb-2">
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
        <Row className="mb-2">
          <Col>
            Don't have an account? <Link to="/signup">Sign up</Link>!
          </Col>
        </Row>
        <Row className="mb-2">
          <Col>
            <Button size="lg" block onClick={handleSubmit}>
              Sign In
            </Button>
          </Col>
        </Row>
        <Row className="mb-2">
          <Col>
            <Link to="/login/resetpassword">Forgot password</Link>
          </Col>
          <Col>
            <Link to="/login/resetemail">Forgot username</Link>
          </Col>
        </Row>
      </PageContent>
    </Page>
  )
}

export default LogInPage
