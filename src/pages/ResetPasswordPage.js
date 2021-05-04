import React from "react"
import { useHistory } from "react-router-dom"
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

import Page, { PageContent, PageHeader } from "../components/Page"

const ResetPasswordPage = () => {
  const history = useHistory()

  const initialValues = {
    email: "",
  }

  const schema = yup.object().shape({
    email: yup.string().email("Invalid email adress").required("Required"),
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
                  "/log-in/reset-password/verification-password-code"
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
                  <FormGroup controlId="usernameFormGroup">
                    <FormLabel>Username</FormLabel>
                    <FormControl
                      values={values.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      name="email"
                      size="md"
                      type="text"
                      placeholder="Enter your email adress"
                    />
                    {touched.email && errors.email ? (
                      <h5>
                        <Badge variant="danger">{errors.email}</Badge>{" "}
                      </h5>
                    ) : null}
                  </FormGroup>
                  <Button size="lg" variant="primary" type="submit" block>
                    Confirm
                  </Button>
                </Form>
              )}
            </Formik>
          </Col>
        </Row>
      </PageContent>
    </Page>
  )
}

export default ResetPasswordPage
