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

const CreateNewPasswordPage = () => {
  const history = useHistory()

  const initialValues = {
    password: "",
    confirmPassword: "",
  }

  const passwordRegex = new RegExp(
    /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/
  )

  const schema = yup.object().shape({
    password: yup
      .string()
      .matches(
        passwordRegex,
        "Your password must contain 8 characters, 1 Uppercase, 1 Lowercase, 1 Number and 1 special case character"
      )
      .required("Required"),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password"), null], "Passwords must match")
      .required("You must confirm your password"),
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
                history.push("/log-in")
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
                  <FormGroup controlId="formBasicPassword">
                    <FormLabel>New password</FormLabel>
                    <FormControl
                      values={values.password}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      name="password"
                      size="lg"
                      type="password"
                      placeholder="Enter your new password"
                    />
                    {touched.password && errors.password ? (
                      <h5>
                        <Badge variant="danger">{errors.password}</Badge>{" "}
                      </h5>
                    ) : null}
                  </FormGroup>

                  <FormGroup controlId="formBasicPassword">
                    <FormLabel>Confirm your password</FormLabel>
                    <FormControl
                      values={values.confirmPassword}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      name="confirmPassword"
                      size="lg"
                      type="password"
                      placeholder="Confirm your new password"
                    />
                    {touched.confirmPassword && errors.confirmPassword ? (
                      <h5>
                        <Badge variant="danger">{errors.confirmPassword}</Badge>{" "}
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

export default CreateNewPasswordPage
