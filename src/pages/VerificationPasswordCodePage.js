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

const VerificationPasswordCodePage = () => {
  const history = useHistory()
  const handleSubmit = useCallback(() => {
    // if (creds === ok)

    history.push(
      "/log-in/reset-password/verification-password-code/new-password"
    )
  })

  return (
    <Page>
      <PageHeader>Reset password</PageHeader>
      <PageContent className="d-flex align-items-center justify-content-center">
        <Row className="mt-3">
          <Col>
            <Form>
              <FormGroup>
                <FormLabel>Enter your validation code</FormLabel>
                <FormControl
                  size="md"
                  type="code"
                  placeholder="Enter your 6 digits code"
                />
              </FormGroup>
            </Form>
            <p>
              Didn't receive your code ? <a href="#">Resend a code</a>.
            </p>
            <Button size="lg" variant="primary" onClick={handleSubmit} block>
              Confirm
            </Button>
          </Col>
        </Row>
      </PageContent>
    </Page>
  )
}

export default VerificationPasswordCodePage
