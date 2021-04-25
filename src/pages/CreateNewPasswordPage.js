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

const CreateNewPasswordPage = () => {
  const history = useHistory()
  const handleSubmit = useCallback(() => {
    // if (creds === ok)

    history.push("/log-in")
  })

  return (
    <Page>
      <PageHeader>Reset password</PageHeader>
      <PageContent className="d-flex align-items-center justify-content-center">
        <Row className="mt-3">
          <Col>
            <Form>
              <FormGroup controlId="formBasicPassword">
                <FormLabel>New password</FormLabel>
                <FormControl
                  size="lg"
                  type="password"
                  placeholder="Enter your new password"
                />
              </FormGroup>

              <FormGroup controlId="formBasicPassword">
                <FormLabel>Confirm your password</FormLabel>
                <FormControl
                  size="lg"
                  type="password"
                  placeholder="Confirm your new password"
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

export default CreateNewPasswordPage
