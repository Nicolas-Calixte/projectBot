import React from "react"
import { Link, useHistory } from "react-router-dom"
import { Formik } from "formik"
import * as yup from "yup"
import {
  Form,
  FormControl,
  FormGroup,
  FormLabel,
  Row,
  Col,
  Button,
  Badge,
} from "react-bootstrap"

import Page, { PageContent, PageHeader } from "../components/Page"

const LogInPage = () => {
  const history = useHistory()

  const initialValues = {
    email: "",
    password: "",
  }

  const passwordRegex = new RegExp(
    /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/
  )

  const schema = yup.object().shape({
    email: yup.string().email("Invalid email adress").required("Required"),
    password: yup
      .string()
      .matches(passwordRegex, "Invalid password")
      .required("Required"),
  })

  return (
    <Page style={{ display: "flex", alignItems: "center" }}>
      <PageHeader noBack>Sign In</PageHeader>
      <PageContent>
        <Formik
          validationSchema={schema}
          onSubmit={(values) => {
            alert(JSON.stringify(values))
            history.push("/dashboard")
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
              <Row className="mt-2 mb-2">
                <Col>
                  <FormGroup controlId="formBasicEmail">
                    <FormLabel>Username</FormLabel>
                    <FormControl
                      values={values.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      name="email"
                      size="lg"
                      type="text"
                      placeholder="Enter your email adress"
                    />
                    {touched.email && errors.email ? (
                      <h5>
                        <Badge variant="danger">{errors.email}</Badge>{" "}
                      </h5>
                    ) : null}
                  </FormGroup>
                </Col>
              </Row>

              <Row className="mb-2">
                <Col>
                  <FormGroup controlId="formBasicPassword">
                    <FormLabel>Password</FormLabel>
                    <FormControl
                      values={values.password}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      name="password"
                      size="lg"
                      type="password"
                      placeholder="Enter your password"
                    />
                    {touched.password && errors.password ? (
                      <h5>
                        <Badge variant="danger">{errors.password}</Badge>{" "}
                      </h5>
                    ) : null}
                  </FormGroup>
                </Col>
              </Row>
              <Row className="mb-2">
                <Col>
                  <Button size="lg" variant="primary" type="submit" block>
                    Sign In
                  </Button>
                </Col>
              </Row>
              <Row className="text-center mb-4">
                <Col>
                  Don't have an account? <Link to="/sign-up">Sign up</Link>!
                </Col>
              </Row>
            </Form>
          )}
        </Formik>

        <Row className="d-flex space-around mt-3 mb-2">
          <Col>
            <Link to="/log-in/reset-password">Forgot password</Link>
          </Col>
          <Col>
            <Link to="/log-in/reset-email">Forgot username</Link>
          </Col>
        </Row>
      </PageContent>
    </Page>
  )
}

export default LogInPage
