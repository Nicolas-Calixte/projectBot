import React, { useCallback } from "react"
import { Button, Col, Row } from "react-bootstrap"
import { useHistory } from "react-router-dom"

import Page, { PageContent, PageHeader } from "../components/Page"
import MainFormGroup from "../components/primaryComponents/MainFormGroup"

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
            <MainFormGroup
              size="md"
              controlId="formBasicCode"
              label="Validation code"
              placeholder="Enter your 6 digits code"
            />
            <Button size="lg" variant="primary" onClick={handleSubmit} block>
              Confirm
            </Button>
          </Col>
        </Row>
      </PageContent>
    </Page>
  )
}

export default SignUpVerificationPage
