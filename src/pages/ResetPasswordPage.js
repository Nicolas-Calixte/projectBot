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

const ResetPasswordPage = () => {
  const history = useHistory()
  const handleSubmit = useCallback(() => {
    // if (creds === ok)

    history.push("/log-in/reset-password/verification-password-code")
  })

  return (
    <Page>
      <PageHeader>Reset password</PageHeader>
      <PageContent className="d-flex align-items-center justify-content-center">
        <Row className="mt-3">
          <Col>
            <Form>
              <FormGroup controlId="usernameFormGroup">
                <FormLabel>Username</FormLabel>
                <FormControl
                  size="md"
                  type="email"
                  placeholder="Enter your email adress or phone number"
                />
              </FormGroup>
            </Form>
            <Button size="lg" variant="primary" onClick={handleSubmit} block>
              Confirm
            </Button>
          </Col>
        </Row>
      </PageContent>
    </Page>
  )
}

export default ResetPasswordPage
