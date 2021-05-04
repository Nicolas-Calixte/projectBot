import React from "react"
import { Formik } from "formik"
import * as yup from "yup"
import {
  Button,
  Col,
  Form,
  FormControl,
  FormGroup,
  FormLabel,
  Row,
  Badge,
} from "react-bootstrap"
import { useHistory } from "react-router-dom"

import Page, { PageContent, PageHeader } from "../components/Page"

const VerificationPasswordCodePage = () => {
  const history = useHistory()

  const initialValues = {
    code: "",
  }

  const codeRegex = new RegExp(/^[0-9]+$/)

  const schema = yup.object().shape({
    code: yup
      .string()
      .matches(codeRegex, "Invalid code")
      .min(6, "Code must contain 6 digits")
      .max(6, "Code must contain only 6 digits")
      .required("Required"),
  })

  return (
    <Page>
      <PageHeader>Reset password</PageHeader>
      <PageContent className="d-flex align-items-center justify-content-center">
        <Row className="mt-3">
          <Col>
            <Formik
              validationSchema={schema}
              onSubmit={(values) => {
                alert(JSON.stringify(values))
                history.push(
                  "/log-in/reset-password/verification-password-code/new-password"
                )
              }}
              initialValues={initialValues}
            >
              {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
              }) => (
                <Form noValidate onSubmit={handleSubmit}>
                  <FormGroup>
                    <FormLabel>Enter your validation code</FormLabel>
                    <FormControl
                      values={values.code}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      name="code"
                      size="md"
                      type="text"
                      placeholder="Enter your 6 digits code"
                    />
                    {touched.code && errors.code ? (
                      <h5>
                        <Badge variant="danger">{errors.code}</Badge>{" "}
                      </h5>
                    ) : null}
                  </FormGroup>
                  <Button size="lg" variant="primary" type="submit" block>
                    Confirm
                  </Button>
                </Form>
              )}
            </Formik>
            <p className="mt-3">
              Didn't receive your code ? <a href="#">Resend a code</a>.
            </p>
          </Col>
        </Row>
      </PageContent>
    </Page>
  )
}

export default VerificationPasswordCodePage
