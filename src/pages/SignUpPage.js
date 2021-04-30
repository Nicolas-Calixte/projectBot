import React from "react"
import { useHistory } from "react-router-dom"
import { Formik } from "formik"
import * as Yup from "yup"
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

  const phoneNumberRegex = new RegExp(/^((\+|00)33\s?|0)[67](\s?\d{2}){4}$/)
  const passwordRegex = new RegExp(
    /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/
  )

  const schema = Yup.object().shape({
    lastName: Yup.string()
      .min(3, "Must be 3 characters or more")
      .max(37, "Must be 37 characters or less")
      .required("Your last name is required"),
    firstName: Yup.string()
      .min(3, "Must be 3 characters or more")
      .max(37, "Must be 37 characters or less")
      .required("Your first name is required"),
    email: Yup.string()
      .email("Invalid email adress")
      .required("Your email adress is required"),
    phoneNumber: Yup.string()
      .matches(phoneNumberRegex, "Invalid phone number")
      .notRequired(),
    password: Yup.string()
      .matches(
        passwordRegex,
        "Your password must contain 8 characters, 1 Uppercase, 1 Lowercase, 1 Number and 1 special case character"
      )
      .required("Password is required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("You must confirm your password"),
    terms: Yup.bool().oneOf([true], "The terms must be accepted").required(),
  })

  return (
    <Page>
      <PageHeader>Sign Up</PageHeader>
      <PageContent
        style={{ minHeight: "60vh" }}
        className="d-flex align-items-center justify-content-center gy-3"
      >
        <div>
          <Formik
            validationSchema={schema}
            onSubmit={(values) => {
              console.log(JSON.stringify(values))
              history.push("/sign-up/sign-up-verification")
            }}
            initialValues={{
              lastName: "",
              firstName: "",
              email: "",
              phoneNumber: "",
              password: "",
              confirmPassword: "",
              terms: false,
            }}
          >
            {({ values, handleChange, handleSubmit }) => (
              <Form noValidate onSubmit={handleSubmit}>
                <Col>
                  <Row className="mt-2">
                    <FormGroup controlId="formLastName">
                      <FormLabel>Lastname</FormLabel>
                      <FormControl
                        value={values.lastName}
                        onChange={handleChange}
                        size="lg"
                        type="text"
                        placeholder="Enter your lastname"
                      />
                    </FormGroup>

                    <FormGroup controlId="formFirstname">
                      <FormLabel>Firstname</FormLabel>
                      <FormControl
                        value={values.firstName}
                        onChange={handleChange}
                        size="lg"
                        type="text"
                        placeholder="Enter you firstname"
                      />
                    </FormGroup>
                  </Row>

                  <Row>
                    <FormGroup controlId="formEmail">
                      <FormLabel>Email</FormLabel>
                      <FormControl
                        value={values.email}
                        onChange={handleChange}
                        size="lg"
                        type="text"
                        placeholder="Enter your email adress"
                      />
                    </FormGroup>

                    <FormGroup controlId="FormPhoneNumber">
                      <FormLabel>Phone number(optional)</FormLabel>
                      <FormControl
                        value={values.phoneNumber}
                        onChange={handleChange}
                        size="lg"
                        type="text"
                        placeholder="Enter your phone number"
                      />
                    </FormGroup>
                  </Row>

                  <Row>
                    <FormGroup controlId="FormGridPassword">
                      <FormLabel>Password</FormLabel>
                      <FormControl
                        value={values.password}
                        onChange={handleChange}
                        size="lg"
                        type="text"
                        placeholder="Create your password"
                      />
                    </FormGroup>

                    <FormGroup controlId="FormGridPassword">
                      <FormLabel>Confirm password</FormLabel>
                      <FormControl
                        value={values.confirmPassword}
                        onChange={handleChange}
                        size="lg"
                        type="text"
                        placeholder="Confirm your password"
                      />
                    </FormGroup>
                  </Row>
                  <FormCheck
                    value={values.terms}
                    onChange={handleChange}
                    type="checkbox"
                    name="terms"
                    id="terms-check"
                    label="I accept the terms and conditions."
                    className="text-center mb-3"
                  />
                  <Row>
                    <Button size="lg" variant="primary" type="submit" block>
                      Sign Up
                    </Button>
                  </Row>
                </Col>
              </Form>
            )}
          </Formik>

          <p className="text-center mt-3">
            An validation code will be sent to your email adress.
          </p>
        </div>
      </PageContent>
    </Page>
  )
}

export default SignUpPage
