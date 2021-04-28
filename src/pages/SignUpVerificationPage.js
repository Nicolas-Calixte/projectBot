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

import Page, { PageContent, PageHeader } from "../components/Page"

const SignUpVerificationPage = () => {
  const history = useHistory()
  const handleSubmit = useCallback(() => {
    // if (creds === ok)

    history.push("/log-in")
  })

  return (
    <Page>
      <PageHeader>Sign Up</PageHeader>
      <PageContent
        style={{ minHeight: "60vh" }}
        className="d-flex align-item-center justify-content-center"
      >
        <Row className="mt-3">
          <Col>
            <Form>
              <FormGroup controlId="formBasicCode">
                <FormLabel>Validation code</FormLabel>
                <FormControl
                  size="md"
                  type="number"
                  placeholder="Enter your 6 digits code"
                />
              </FormGroup>
              <Button size="lg" variant="primary" onClick={handleSubmit} block>
                Confirm
              </Button>
            </Form>
          </Col>
        </Row>
      </PageContent>
    </Page>
  )
}

export default SignUpVerificationPage
