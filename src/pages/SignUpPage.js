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

    history.push("/sign-up/sign-up-verification")
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
              <Row className="mt-2">
                <FormGroup controlId="formGridName">
                  <FormLabel>Lastname</FormLabel>
                  <FormControl
                    size="lg"
                    type="name"
                    placeholder="Enter your lastname"
                  />
                </FormGroup>

                <FormGroup controlId="formGridFirstname">
                  <FormLabel>Firstname</FormLabel>
                  <FormControl
                    size="lg"
                    type="firstname"
                    placeholder="Enter you firstname"
                  />
                </FormGroup>
              </Row>

              <Row>
                <FormGroup controlId="formGridEmail">
                  <FormLabel>Email</FormLabel>
                  <FormControl
                    size="lg"
                    type="email"
                    placeholder="Enter your email adress"
                  />
                </FormGroup>

                <FormGroup controlId="FormGridPhoneNumber">
                  <FormLabel>Phone number(optional)</FormLabel>
                  <FormControl
                    size="lg"
                    type="phone number"
                    placeholder="Enter your phone number"
                  />
                </FormGroup>
              </Row>

              <Row>
                <FormGroup controlId="FormGridPassword">
                  <FormLabel>Password</FormLabel>
                  <FormControl
                    size="lg"
                    type="password"
                    placeholder="Create your password"
                  />
                </FormGroup>

                <FormGroup controlId="FormGridPassword">
                  <FormLabel>Confirm password</FormLabel>
                  <FormControl
                    size="lg"
                    type="password"
                    placeholder="Confirm your password"
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
            An validation code will be sent to your email adress.
          </p>
        </div>
      </PageContent>
    </Page>
  )
}

export default SignUpPage
